const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendHtml: (html, index, imgSet) => ipcRenderer.send('html', html, index, imgSet),
  refreshToken: (json) => ipcRenderer.send('tokenRefreshed', json),
});