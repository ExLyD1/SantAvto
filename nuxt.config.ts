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

	app: {
		head: {
			title: 'santavto', // заголовок страницы по умолчанию
			titleTemplate: '%s — SANT auto service', // как будет формироваться title на других страницах
			htmlAttrs: {
				lang: 'uk', // язык страницы (напр. 'uk' или 'en')
			},
			meta: [
				{
					name: 'description',
					content:
						'Обслуговування та детейлінг авто від SANT auto service',
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				// можете добавить Open Graph, Twitter card и т.п.
				{ property: 'og:title', content: 'SANT auto service' },
				{
					property: 'og:description',
					content:
						'Захист, детейлінг, фарбування авто і кузовні роботи',
				},
			],
			link: [
				{
					rel: 'preload',
					as: 'image',
					type: 'image/png',
					href: '/favicon.svg',
				},
			],
		},
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

	nitro: {
		routeRules: {
			// Всё в папке _nuxt (скрипты, стили, чанки)
			'/_nuxt/**': {
				headers: {
					// Кешировать на год и пометить как immutable
					'cache-control': 'public, max-age=31536000, immutable',
				},
			},
			// Например, favicon
			'/favicon.ico': {
				headers: {
					'cache-control': 'public, max-age=31536000, immutable',
				},
			},
			// Если у вас есть папка с картинками
			'/icons/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
			'/portfolio/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
			'/reviews/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
			'/service-examples/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
			'/services/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
			'/entities/service/config/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
			'/widgets/service/config/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
			'/features/**': {
				headers: {
					'cache-control': 'public, max-age=604800', // 7 дней
				},
			},
		},
	},
})
