/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	// якщо ви використовуєте jit‑режим — переконайтесь, що src охоплює всі .vue/.js
	content: [
		'./components/**/*.{vue,js,ts}',
		'./features/**/*.{vue,js,ts}',
		'./widgets/**/*.{vue,js,ts}',
		'./entities/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
		'./nuxt.config.{js,ts}',
	],
}
