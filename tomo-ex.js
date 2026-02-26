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
