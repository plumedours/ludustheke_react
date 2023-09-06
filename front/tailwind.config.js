/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				'primary-green': '#1dd1a1',
			},
			screens: {
				xxs: '320px',
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
			},
		},
	},
	plugins: [],
};
