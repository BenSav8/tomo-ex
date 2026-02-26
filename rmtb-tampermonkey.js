// ==UserScript==
// @name         tomo-ex
// @namespace    http://rmtrollbox.xd4y.zip/
// @version      v2
// @description  Custom trollbox font
// @author       BenSav
// @match        *://rmtrollbox.xd4y.zip/
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

