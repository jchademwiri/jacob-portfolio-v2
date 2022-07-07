const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins Libre Franklin', ...fontFamily.sans],
				serif: [' Libre Baskerville', ...fontFamily.serif],
			},
		},
	},
	plugins: [],
};
