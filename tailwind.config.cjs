const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
			mono: ['Source Code Pro', 'monospace'],
			handwriting: ['Kalam', 'cursive']
		},
		extend: {
			colors: {
				lavenderIndigo: '#8657e1',
				daisyBush: '#4714a5',
				goldenFizz: '#feff40',
				whisper: '#f9f4f9',
				pastelPurple: '#b2a1bb',
				purple: '#7209b7',
				robinEggBlue: '#00e9c0',
				blueGem: '#3813a0',
				caribbeanGreen: '#1CC6A0',
				scarlet: '#f72f45',
				monsoon: '#777878',
				silver: '#c0c0c0',
				gallery: '#efeaf2',
				caribbeanGreen: '#00ca9e',
				fog: '#decaec'
			}
		}
	},

	plugins: []
};

module.exports = config;
