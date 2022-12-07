const path = require('path');
const https = require('https');
const fs = require('fs');
const { app, BrowserWindow, net, ipcMain } = require('electron');
const { templateFoot, templateHead } = require('./tempalte');

if (require('electron-squirrel-startup')) return;

let mainWindow;
let htmls = [];
const allImgMap = new Map();
const perFile = 100;
const outputPath = `${app.getPath('documents')}/wellnote_export/`;

async function waitForTargetURL(mainWindow) {
  return new Promise(resolve => {
    const t = setInterval(() => {
      const url = mainWindow.webContents.getURL();
      if (url === 'https://wellnote.jp/') {
        clearInterval(t);
        resolve();
      }
    }, 1000);
  })
}

async function saveImage(imgUrl, path, timeout) {
  return new Promise((resolve, reject) => {
    console.log(`start downloading ${imgUrl} to ${path}...`);
    const file = fs.createWriteStream(path);
    const t = setTimeout(reject, timeout);
    https.get(imgUrl, function (response) {
      response.pipe(file);
      response.on('end', () => {
        console.log(`downloaded ${imgUrl} to ${path}`);
        clearTimeout(t);
        resolve();
      });
    });
  });
}

function refreshToken() {
  return new Promise(resolve => {
    function tokenRefereshedEventHandler(event, json) {
      resolve(json['access_token']);
    }
    mainWindow.webContents.executeJavaScript(`refreshToken()`);
    ipcMain.once('tokenRefreshed', tokenRefereshedEventHandler);
  });
}

function padding(num) {
  return String(num).padStart(5, '0');
}

async function loadJson(url, token) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const options = {
      protocol: u.protocol,
      host: u.host,
      path: u.pathname + u.search,
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + token
      }
    }
    const req = https.request(options, (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        try {
          let json = JSON.parse(body);
          resolve(json);
        } catch (error) {
          reject(error);
        };
      });
    });
    req.on("error", (error) => {
      reject(error);
    });
    req.end();
  })
}

async function loadAlbum(monthStr, familyId, token) {
  const [year, month] = monthStr.split('-').map(t => Number(t));
  const from = new Date(year, month - 1).getTime() / 1000;
  const to = new Date(year, month).getTime() / 1000 - 1;
  let url = `https://api.wellnote.jp/v2/families/${familyId}/album?from=${from}&to=${to}`;
  let albumJson = await loadJson(url, token);
  if (!albumJson.photos) {
    console.error(`Something wrong with ${url}`, albumJson);
  }
  const photos = albumJson.photos;
  while (albumJson.has_next) {
    url = `https://api.wellnote.jp/v2/families/${familyId}/album?cursor=${albumJson.next_cursor}&from=${from}&to=${to}`;
    albumJson = await loadJson(url, token);
    if (!albumJson.photos) {
      console.error(`Something wrong with ${url}`, albumJson);
    }
    photos.push(...albumJson.photos);
  }
  return photos;
}

async function downloadRawFile(token) {
  const { families } = await loadJson('https://api.wellnote.jp/v2/families', token);
  const familyId = families[0].family_id;
  const { months } = await loadJson(`https://api.wellnote.jp/v2/families/${familyId}/album/available-months?tz=32400`, token);
  for (let i = 0; i < months.length; i++) {
    const monthStr = months[i];
    const photos = await loadAlbum(monthStr, familyId, token);
    fs.mkdirSync(`${outputPath}/albums/${monthStr}`, { recursive: true });
    for (let j = 0; j < photos.length; j++) {
      const p = photos[j];
      const url = p.signature.content_url.replace('{size}', 'p');
      let fname = new URL(url).pathname.replace(/\//g, '_');
      if (!fname.includes(".")) fname += '.jpg';
      mainWindow.webContents.executeJavaScript(`dialogMessage('Downloading ${url}')`);
      await retryableCall(async () => await saveImage(url, `${outputPath}/albums/${monthStr}/${fname}`, 30000), 3, `Failed to download ${url}`);
    }
  }
  mainWindow.webContents.executeJavaScript(`alert('エクスポートを終了します')`);
}

async function retryableCall(callback, times = 3, message = null) {
  for (let i = 0; i < times; i++) {
    try {
      return await callback();
    } catch (e) {
      console.error(`Retryable call failed ${i + 1} times`, message);
      await wait(1000);
    }
  }
}

async function htmlEventHandler(event, html, index, imgSet) {
  console.log(`html event fired index=${index}`);
  if (index > 0 && index % perFile === 0) {
    // perFileごとにファイルを出力
    const result = templateHead + htmls.join('\n') + templateFoot;
    fs.writeFileSync(`${outputPath}/${padding(index - perFile)}-${padding(index - 1)}.html`, result);
    htmls = [];
  }
  if (!html || index === 1) {
    // HTMLがnullの場合は最後に到達したということなのでファイルを出力
    const result = templateHead + htmls.join('\n') + templateFoot;
    console.log(index);
    fs.writeFileSync(`${outputPath}/${padding(parseInt(index / perFile, 10) * perFile)}-${padding(index - 1)}.html`, result);
    // 次の処理
    const token = await refreshToken();
    downloadRawFile(token);
    return;
  }
  const imgs = Array.from(imgSet);
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    if (allImgMap.has(img)) continue;
    const url = new URL(img);
    let fname = new URL(url).pathname.replace(/\//g, '_');
    if (!fname.includes(".")) fname += '.jpg';
    const path = `${outputPath}/images/${fname}`;
    try {
      await retryableCall(async () => await saveImage(img, path, 5000), 3, `Failed to download ${img}`);
    } catch (e) {
      console.error('ERROR occured ' + img);
    }
    allImgMap.set(img, fname);
  }
  let convertedHtml = html;
  allImgMap.forEach((v, k) => {
    convertedHtml = convertedHtml.replaceAll(k, `images/${v}`);
  });

  htmls.push(convertedHtml);
  await mainWindow.webContents.executeJavaScript(`snapshot(${index + 1})`);
}

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  });
}

function initEvent() {
  ipcMain.on('html', htmlEventHandler);
}

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'Wellnote DL',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  await mainWindow.loadURL("https://wellnote.jp/login");
  await waitForTargetURL(mainWindow);
  // 該当ページにいったら下記JSをinject
  await mainWindow.webContents.executeJavaScript(`
  async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    });
  }
  async function refreshToken() {
    method = "POST";
    const resp = await fetch('https://auth.wellnote.jp/refresh', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({with_cookie:true})
    });
    const json = await resp.json();
    window.electronAPI.refreshToken(json);
  }
  async function snapshot(index) {
    console.log('snapshot(' + index + ') called');
    let el;
    for (let i = 0; i < 10; i++) {
      el = document.querySelector(\`*[data-index="\${index}"]\`);
      if (el && el.outerHTML) break;
      await wait(1000);
    }
    if (el) {
      let html = el.outerHTML;
      const r = el.getBoundingClientRect();
      const imgSet = new Set(Array.from(el.querySelectorAll('img')).map(el => el.src));
      window.scroll(window.pageXOffset, window.pageYOffset + r.height);
      await wait(200);
      window.electronAPI.sendHtml(html, index, imgSet);
    } else {
      window.electronAPI.sendHtml(null, index, []);
    }
  }
  function dialogMessage(message) {
    const el = document.querySelector('#dialog-message');
    if (el) {
      el.innerText = message;
    } else {
      const dialogEl = document.createElement('dialog');
      dialogEl.style = 'width: 80vw';
      dialogEl.id = 'dialog-message';
      document.body.appendChild(dialogEl);
      dialogEl.innerText = message;
      dialogEl.showModal();
    }
  }
  (async () => {
    alert('エクスポートを開始します');
    await wait(3000);
    snapshot(0);
  })();
  `);
};


app.once('ready', () => {
  fs.mkdirSync(`${outputPath}/images`, { recursive: true });
  initEvent();
  createWindow();
});

app.once('window-all-closed', () => app.quit());