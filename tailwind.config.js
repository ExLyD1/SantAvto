// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			colors: {
				myOrange: '#E67009',
			},
		},
	},
	content: [
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	plugins: [],
}
