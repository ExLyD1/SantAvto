// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxt/ui',
		'nuxt-swiper',
		'@nuxt/image',
	],
	ui: {
		colorMode: false,
	},

	css: ['~/assets/css/splide-overrides.css'],

	runtimeConfig: {
		public: {
			emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
			emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
			emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
		},
	},

	devServer: {
		host: '0.0.0.0', // слухає на всіх інтерфейсах
		port: 3000, // або будь‑який вільний порт
	},
})
