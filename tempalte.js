const templateHead = `<html>
<head>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap">
  <style>
  body {
    color: rgb(51, 51, 51);
    font-family: Roboto, "Noto Sans JP", sans-serif;
  }

  .fIagkU {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 2px;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .jpBOea:first-child:nth-last-child(5),
  .jpBOea:first-child:nth-last-child(5)+.jpBOea {
    grid-area: span 4 / span 3 / auto / auto;
  }

  .jpBOea:first-child:nth-last-child(5)~.sc-haTkiu:nth-child(n+3) {
    grid-area: span 2 / span 2 / auto / auto;
  }

  .jpBOea:first-child:nth-last-child(4), .jpBOea:first-child:nth-last-child(4) ~ .jpBOea {
    grid-area: span 3 / span 3 / auto / auto;
  }

  .jpBOea:first-child:nth-last-child(3) {
    grid-area: span 6 / span 3 / auto / auto;
  }

  .jpBOea:first-child:nth-last-child(3) ~ .sc-haTkiu {
    grid-area: span 3 / span 3 / auto / auto;
  }

  .jpBOea:first-child:nth-last-child(2), .jpBOea:first-child:nth-last-child(2) ~ .jpBOea {
    grid-area: span 6 / span 3 / auto / auto;
  }

  .iuaZue {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 15rem;
  }

  .jnBQzU {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.6);
  }

  .jpBOea {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .fgmIxJ {
    font-size: 0.875rem;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .cjPOzV {
    font-size: 0.75rem;
  }

  .bKLpwb {
    font-size: 0.875rem;
    font-weight: bold;
    flex-shrink: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .bjoTkn {
    display: flex;
    flex-direction: column;
    padding: 1rem 0px;
    gap: 1rem;
  }

  .sc-cqJhZP+.sc-cqJhZP {
    border-top: 1px solid rgb(221, 221, 221);
  }

  .encCDM {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: start;
    align-items: flex-end;
    gap: 1rem;
    height: 2rem;
  }

  .umHWY {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
  }

  .fvPZXC {
    font-size: 0.875rem;
    color: rgb(138, 138, 138);
  }

  .hxfVks {
    font-size: 0.875rem;
    color: rgb(138, 138, 138);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .jpBOea:only-child {
    grid-area: span 6 / span 6 / auto / auto;
  }

  .jpBOea {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .bQuwqp {
    flex-shrink: 0;
  }

  .jvsiPh {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    gap: 0.75rem;
    height: 2.25rem;
    min-width: 10rem;
  }

  .kHvnyo {
    overflow: hidden;
    border-radius: 50%;
    height: 2.25rem;
    width: 2.25rem;
    background-color: rgb(202, 202, 202);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .sc-ksHpcM.eOQRYD {
    width: 56px;
    height: 56px;
  }

  .pHbnI {
    display: flex;
    flex-direction: column;
    border-block-start: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
  }

  .foYUmJ {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 2rem 0.75rem;
  }

  .fUNQcE {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    gap: 1rem;
  }

  .bFfRtb {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    gap: 0.75rem;
    height: 3.5rem;
    min-width: 10rem;
  }

  .Kvggt {
    flex-shrink: 0;
  }

  .iEZyrQ {
    overflow: hidden;
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
    background-color: rgb(202, 202, 202);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .eOQRYD {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .ibLnVU {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 0.25rem;
    min-width: 0px;
  }

  .jPmKFQ {
    font-weight: bold;
    flex-shrink: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .fqnSS {
    font-size: 0.875rem;
    color: rgb(138, 138, 138);
  }

  .dGlTLM {
    display: flex;
    width: max-content;
    color: rgb(102, 102, 102);
    position: relative;
  }

  .QocVH {
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .QocVH:not(:focus-visible) {
    outline: none;
  }

  .lmmkpp {
    display: flex;
    flex-direction: column;
    padding-left: 3.5rem;
  }

  .BvCGQ {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .dBUysB {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .dRWTIA {
    display: flex;
    flex-direction: row;
    border-top: 1px solid rgb(221, 221, 221);
    border-bottom: 1px solid rgb(221, 221, 221);
  }

  .jBiWgl {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    background-color: rgb(255, 255, 255);
    height: 2.5rem;
    width: 100%;
    font-weight: bold;
    font-size: 0.875rem;
    color: rgb(102, 102, 102);
    cursor: pointer;
  }

  .jflBsb {
    flex-shrink: 0;
    align-self: stretch;
    margin: 0.5rem 0px;
    background-color: rgb(221, 221, 221);
    border: none;
    width: 1px;
  }

  .fEIBnI {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    background-color: rgb(255, 255, 255);
    height: 2.5rem;
    width: 100%;
    font-weight: bold;
    font-size: 0.875rem;
    color: rgb(102, 102, 102);
    cursor: pointer;
  }

  .faPfNG {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    background-color: rgb(255, 255, 255);
    height: 2.5rem;
    width: 100%;
    font-weight: bold;
    font-size: 0.875rem;
    color: rgb(102, 102, 102);
    cursor: pointer;
  }

  .fsVjeU:not(:empty) {
    border-block-end: 1px solid rgb(221, 221, 221);
  }

  .fsVjeU {
    display: flex;
    flex-direction: column;
    padding-left: 5.5rem;
    padding-right: 2rem;
  }

  .jhTvTb {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15%;
    height: 15%;
    min-width: 2.5rem;
    min-height: 2.5rem;
  }

  .jfYeMa {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .feSHBD {
    object-fit: contain;
    width: 7rem;
    height: 7rem;
  }

  .cJZOzE {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 7rem;
  }

  .gnTgeS {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding-left: 3rem;
  }

  .lahFaz {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    gap: 1rem;
  }

  .dl-container {
    width: 658px;
    margin: auto;
    border: 1px solid #ccc;
    background-color: rgb(247, 247, 247);
  }

  .dl-container>div {
    margin-bottom: 10px;
  }
  </style>
</head>

<body>
  <div class="dl-container">`;


const templateFoot = `</div></body></html>`;

module.exports = {
  templateFoot, templateHead
};