/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-el': '#1e1e1e',
				'dark-bg': '#121212',
				'light-mode-text': 'hsl(200, 15%, 8%)',
				'light-input': 'hsl(0, 0%, 52%)',
				'light-bg': 'hsl(0, 0%, 98%)',
				'dark-mode-text': 'hsl(0, 0%, 100%)',
				'dark-primary': '#bb86fc',
				'light-primary': '#6200ee',
			},
		},
	},
	plugins: [],
};
