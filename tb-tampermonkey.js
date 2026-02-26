// ==UserScript==
// @name         tomo-ex
// @namespace    http://windows93.net/
// @version      v2
// @description  Custom trollbox font
// @author       BenSav
// @match        *://www.windows93.net/trollbox*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const style = document.createElement('style');
	style.textContent = `
		@font-face {
			font-family: _tomo;
			src: url('https://bensav8.github.io/tomo-ex/tomo-ex.ttf') format('truetype');
            size-adjust: 90%;
        }
	`;

	document.documentElement.appendChild(style);
})();


