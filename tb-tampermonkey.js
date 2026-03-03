// ==UserScript==
// @name         tomo-ex
// @namespace    http://windows93.net/
// @version      v2
// @description  Custom trollbox font
// @author       BenSav
// @match        *://v2.windows93.net/trollbox*
// @match        *://*windows93.net/c/programs/network/Trollbox*
// @grant        none
// ==/UserScript==

let styleex = document.createElement('style');
styleex.innerHTML = `
    @font-face {
        font-family: 'tomo-ex';
        src: url('https://bensav8.github.io/tomo-ex/tomo-ex.ttf') format('truetype');
    }
    body, * {
        font-family: 'tomo-ex', monospace !important;
		font-size: 9px;
		line-height: 1.5;
    }
    button, * {
		font-size: 9px;
		line-height: 1.5;
    }
    textarea, * {
		font-size: 9px;
		line-height: 1.5;
    }
`;
document.head.appendChild(styleex);
