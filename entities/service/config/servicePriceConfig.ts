export interface IServicePrice {
	label: string
	isExpanded: boolean
	price?: string
	subServices?: ISubServicePrice[]
}

export interface ISubServicePrice {
	label: string
	price: string
}

export interface IServicePriceGroup {
	imgUrl: string
	imgWidth: number
	imgHeight: number
	title: string
	type: 'sedan' | 'outdoor' | 'picap'
	serviceType: 'detailing' | 'wrench' | 'protect' | 'pallete'
	services: IServicePrice[]
}
// Service configuration for ServiceMenu component
export interface IServiceMenu {
	title: string
	isExpanded?: boolean
	services: IServiceMenuItem[]
}

export interface IServiceMenuItem {
	label: string
	price: string
}

export const detailingPriceMenu: IServicePriceGroup[] = [
	{
		title: 'Седан',
		imgWidth: 213,
		imgHeight: 67,
		imgUrl: '/service-examples/sedan.png',
		type: 'sedan',
		serviceType: 'detailing',
		services: [
			{
				label: 'Хімчистка',
				isExpanded: true,
				subServices: [
					{
						label: 'Повний комплекс хімчистки авто',
						price: '5000 грн',
					},
					{
						label: 'Хімчистка підлоги / стелі салону',
						price: '1000 грн',
					},
					{ label: 'Хімчистка дверної карти', price: '500 грн' },
					{ label: 'Хімчистка заднього сидіння', price: '800 грн' },
					{ label: 'Хімчистка переднього сидіння', price: '400 грн' },
					{ label: 'Хімчистка багажного відсіку', price: '800 грн' },
					{ label: 'Хімчистка торпеди', price: '1200 грн' },
					{ label: 'Озонація салону', price: '1500 грн' },
				],
			},
			{
				label: 'Полірування',
				isExpanded: true,
				subServices: [
					{ label: 'Локально (місце)', price: '500 грн' },
					{ label: 'Косметичне полірування', price: '5000 грн' },
					{ label: 'Відновлювальне полірування', price: '10400 грн' },
					{
						label: 'Полірування салонного глянцю',
						price: '2500 грн',
					},
					{
						label: 'Фара (шліфування + полірування)',
						price: '2500 грн',
					},
					{ label: 'Миття підкапотного простору', price: '2500 грн' },
				],
			},

			{
				label: 'Миття підкапотноного простору',
				isExpanded: false,
				price: '2500 грн',
			},
		],
	},

	{
		title: 'Позашляховик',
		imgWidth: 213,
		imgHeight: 82,
		imgUrl: '/service-examples/outdoor.png',
		type: 'outdoor',
		serviceType: 'detailing',
		services: [
			{
				label: 'Хімчистка',
				isExpanded: true,
				subServices: [
					{
						label: 'Повний комплекс хімчистки авто',
						price: '5000 грн',
					},
					{
						label: 'Хімчистка підлоги / стелі салону',
						price: '1000 грн',
					},
					{ label: 'Хімчистка дверної карти', price: '500 грн' },
					{ label: 'Хімчистка заднього сидіння', price: '800 грн' },
					{ label: 'Хімчистка переднього сидіння', price: '400 грн' },
					{ label: 'Хімчистка багажного відсіку', price: '800 грн' },
					{ label: 'Хімчистка торпеди', price: '1200 грн' },
					{ label: 'Озонація салону', price: '1500 грн' },
				],
			},
			{
				label: 'Полірування',
				isExpanded: true,
				subServices: [
					{ label: 'Локально (місце)', price: '500 грн' },
					{ label: 'Косметичне полірування', price: '6200 грн' },
					{ label: 'Відновлювальне полірування', price: '11200 грн' },
					{
						label: 'Полірування салонного глянцю',
						price: '2500 грн',
					},
					{
						label: 'Фара (шліфування + полірування)',
						price: '2500 грн',
					},
					{ label: 'Миття підкапотного простору', price: '2500 грн' },
				],
			},

			{
				label: 'Миття підкапотноного простору',
				isExpanded: false,
				price: '2500 грн',
			},
		],
	},

	{
		title: 'Пікап',
		imgWidth: 213,
		imgHeight: 75,
		imgUrl: '/service-examples/picap.png',
		type: 'picap',
		serviceType: 'detailing',
		services: [
			{
				label: 'Хімчистка',
				isExpanded: true,
				subServices: [
					{
						label: 'Повний комплекс хімчистки авто',
						price: '5000 грн',
					},
					{
						label: 'Хімчистка підлоги / стелі салону',
						price: '1000 грн',
					},
					{ label: 'Хімчистка дверної карти', price: '500 грн' },
					{ label: 'Хімчистка заднього сидіння', price: '800 грн' },
					{ label: 'Хімчистка переднього сидіння', price: '400 грн' },
					{ label: 'Хімчистка багажного відсіку', price: '800 грн' },
					{ label: 'Хімчистка торпеди', price: '1200 грн' },
					{ label: 'Озонація салону', price: '1500 грн' },
				],
			},
			{
				label: 'Полірування',
				isExpanded: true,
				subServices: [
					{ label: 'Локально (місце)', price: '500 грн' },
					{ label: 'Косметичне полірування', price: '7000 грн' },
					{ label: 'Відновлювальне полірування', price: '12000 грн' },
					{
						label: 'Полірування салонного глянцю',
						price: '2500 грн',
					},
					{
						label: 'Фара (шліфування + полірування)',
						price: '2500 грн',
					},
					{ label: 'Миття підкапотного простору', price: '2500 грн' },
				],
			},

			{
				label: 'Миття підкапотноного простору',
				isExpanded: false,
				price: '2500 грн',
			},
		],
	},
]

export const wrenchMenu: IServicePriceGroup[] = [
	{
		title: 'Седан',
		imgWidth: 213,
		imgHeight: 67,
		imgUrl: '/service-examples/sedan.png',
		type: 'sedan',
		serviceType: 'wrench',
		services: [
			{
				label: "Видалення вм'ятин(без фарбування)",
				isExpanded: false,
				price: 'Договірна ціна',
			},
			{
				label: 'Арматурні роботи',
				isExpanded: false,
				price: 'Договірна ціна',
			},
			{
				label: 'Шумоізоляція',
				isExpanded: false,
				price: '1500 грн',
			},
			{
				label: 'Фарбування',
				isExpanded: true,
				subServices: [
					{ label: 'Рихтування', price: 'Договірна ціна' },
					{
						label: 'Фарбування + арматурні роботи для окремої деталі',
						price: '6200 грн',
					},
				],
			},
		],
	},
	{
		title: 'Позашляховик',
		imgWidth: 213,
		imgHeight: 82,
		imgUrl: '/service-examples/outdoor.png',
		type: 'outdoor',
		serviceType: 'wrench',
		services: [
			{
				label: "Видалення вм'ятин(без фарбування)",
				isExpanded: false,
				price: 'Договірна ціна',
			},
			{
				label: 'Арматурні роботи',
				isExpanded: false,
				price: 'Договірна ціна',
			},
			{
				label: 'Шумоізоляція',
				isExpanded: false,
				price: '1800 грн',
			},
			{
				label: 'Фарбування',
				isExpanded: true,
				subServices: [
					{ label: 'Рихтування', price: 'Договірна ціна' },
					{
						label: 'Фарбування + арматурні роботи для окремої деталі',
						price: '6200 грн',
					},
				],
			},
		],
	},

	{
		title: 'Пікап',
		imgWidth: 213,
		imgHeight: 75,
		imgUrl: '/service-examples/picap.png',
		type: 'picap',
		serviceType: 'wrench',
		services: [
			{
				label: "Видалення вм'ятин(без фарбування)",
				isExpanded: false,
				price: 'Договірна ціна',
			},
			{
				label: 'Арматурні роботи',
				isExpanded: false,
				price: 'Договірна ціна',
			},
			{
				label: 'Шумоізоляція',
				isExpanded: false,
				price: '20 00 грн',
			},
			{
				label: 'Фарбування',
				isExpanded: true,
				subServices: [
					{ label: 'Рихтування', price: 'Договірна ціна' },
					{
						label: 'Фарбування + арматурні роботи для окремої деталі',
						price: '6200 грн',
					},
				],
			},
		],
	},
]

export const protectMenu: IServicePriceGroup[] = [
	{
		title: 'Седан',
		imgWidth: 213,
		imgHeight: 67,
		imgUrl: '/service-examples/sedan.png',
		type: 'sedan',
		serviceType: 'protect',
		services: [
			{ label: 'Кераміка', price: '6300 грн', isExpanded: false },
			{ label: 'Нанокераміка', price: '6300 грн', isExpanded: false },
			{ label: 'Шумоізоляція', price: '54000 грн', isExpanded: false },
			{ label: 'Антидощ', price: '1500 грн', isExpanded: false },
			{ label: 'Антикор', price: '28800 грн', isExpanded: false },
			{ label: 'Твердий віск', price: '500 грн', isExpanded: false },
			{
				label: 'Плівка',
				isExpanded: true,
				subServices: [
					{ label: 'Повне обклеювання авто', price: '90000 грн' },
					{
						label: 'Захисна плівка-смужка на дах',
						price: '1800 грн',
					},
					{ label: 'Захисна плівка на фари', price: '3600 грн' },
					{ label: 'Захисна плівка на дзеркала', price: '3000 грн' },
					{ label: 'Захисна плівка під ручками', price: '1800 грн' },
					{
						label: 'Захисна плівка на кант дверей',
						price: '1500 грн',
					},
					{
						label: 'Захисна смужка на задній бампер',
						price: '1800 грн',
					},
					{
						label: 'Захисна плівка на пороги у проємах (нижня частина)',
						price: '3000 грн',
					},
				],
			},
		],
	},
	{
		title: 'Позашляховик',
		imgWidth: 213,
		imgHeight: 82,
		imgUrl: '/service-examples/outdoor.png',
		type: 'outdoor',
		serviceType: 'protect',
		services: [
			{ label: 'Кераміка', price: '7200 грн', isExpanded: false },
			{ label: 'Нанокераміка', price: '7200 грн', isExpanded: false },
			{ label: 'Шумоізоляція', price: '64800 грн', isExpanded: false },
			{ label: 'Антидощ', price: '1500 грн', isExpanded: false },
			{ label: 'Антикор', price: '28800 грн', isExpanded: false },
			{ label: 'Твердий віск', price: '500 грн', isExpanded: false },
			{
				label: 'Плівка',
				isExpanded: true,
				subServices: [
					{ label: 'Повне обклеювання авто', price: '100800 грн' },
					{
						label: 'Захисна плівка-смужка на дах',
						price: '1800 грн',
					},
					{ label: 'Захисна плівка на фари', price: '3600 грн' },
					{ label: 'Захисна плівка на дзеркала', price: '3000 грн' },
					{ label: 'Захисна плівка під ручками', price: '1800 грн' },
					{
						label: 'Захисна плівка на кант дверей',
						price: '1500 грн',
					},
					{
						label: 'Захисна смужка на задній бампер',
						price: '1800 грн',
					},
					{
						label: 'Захисна плівка на пороги у проємах (нижня частина)',
						price: '3000 грн',
					},
				],
			},
		],
	},
	{
		title: 'Пікап',
		imgWidth: 213,
		imgHeight: 75,
		imgUrl: '/service-examples/picap.png',
		type: 'picap',
		serviceType: 'protect',
		services: [
			{ label: 'Кераміка', price: '8280 грн', isExpanded: false },
			{ label: 'Нанокераміка', price: '8280 грн', isExpanded: false },
			{ label: 'Шумоізоляція', price: '72000 грн', isExpanded: false },
			{ label: 'Антидощ', price: '1500 грн', isExpanded: false },
			{ label: 'Антикор', price: '28800 грн', isExpanded: false },
			{ label: 'Твердий віск', price: '500 грн', isExpanded: false },
			{
				label: 'Плівка',
				isExpanded: true,
				subServices: [
					{ label: 'Повне обклеювання авто', price: '115200 грн' },
					{
						label: 'Захисна плівка-смужка на дах',
						price: '1800 грн',
					},
					{ label: 'Захисна плівка на фари', price: '3600 грн' },
					{ label: 'Захисна плівка на дзеркала', price: '3000 грн' },
					{ label: 'Захисна плівка під ручками', price: '1800 грн' },
					{
						label: 'Захисна плівка на кант дверей',
						price: '1500 грн',
					},
					{
						label: 'Захисна смужка на задній бампер',
						price: '1800 грн',
					},
					{
						label: 'Захисна плівка на пороги у проємах (нижня частина)',
						price: '3000 грн',
					},
				],
			},
		],
	},
]

export const palleteMenu: IServicePriceGroup[] = [
	{
		title: 'Седан',
		imgWidth: 213,
		imgHeight: 67,
		imgUrl: '/service-examples/sedan.png',
		type: 'sedan',
		serviceType: 'pallete',
		services: [
			{
				label: 'Фарбування',
				isExpanded: true,
				subServices: [
					{ label: 'Заміна кольору', price: '200 грн' },
					{ label: 'Плівка полеуритан', price: '105000 грн' }, // ~104225
					{ label: 'Плівка гібридна', price: '100000 грн' }, // ~100056
					{ label: 'Плівка винилоновая', price: '92000 грн' }, // ~91718
					{
						label: 'Покраска суппоротов без снятия',
						price: '6000 грн',
					},
					{
						label: 'Перетягивание | покраска кожи седенья',
						price: '350 грн',
					},
					{ label: 'Перетяжка потолков', price: '300 грн' },
				],
			},
			{
				label: 'Тонування',
				isExpanded: true,
				subServices: [
					{ label: 'Повне тонування', price: '7000 грн' },
					{ label: 'Тонування бокового скла', price: '1100 грн' },
					{ label: 'Тонування лобового скла', price: '2500 грн' },
					{ label: 'Тонування заднього скла', price: '2500 грн' },
					{ label: 'Тонування задніх стопів', price: '4100 грн' }, // ~4169
				],
			},
			{
				label: 'Антихром',
				price: 'Договірна ціна',
				isExpanded: false,
			},
		],
	},
	{
		title: 'Позашляховик',
		imgWidth: 213,
		imgHeight: 82,
		imgUrl: '/service-examples/outdoor.png',
		type: 'outdoor',
		serviceType: 'pallete',
		services: [
			{
				label: 'Фарбування',
				isExpanded: true,
				subServices: [
					{ label: 'Заміна кольору', price: '200 грн' },
					{ label: 'Плівка полеуритан', price: '117000 грн' }, // ~116732
					{ label: 'Плівка гібридна', price: '113000 грн' }, // ~112563
					{ label: 'Плівка винилоновая', price: '100000 грн' }, // ~100056
					{
						label: 'Покраска суппоротов без снятия',
						price: '6000 грн',
					},
					{
						label: 'Перетягивание | покраска кожи седенья',
						price: '350 грн',
					},
					{ label: 'Перетяжка потолков', price: '300 грн' },
				],
			},
			{
				label: 'Тонування',
				isExpanded: true,
				subServices: [
					{ label: 'Повне тонування', price: '7000 грн' },
					{ label: 'Тонування бокового скла', price: '1100 грн' },
					{ label: 'Тонування лобового скла', price: '2500 грн' },
					{ label: 'Тонування заднього скла', price: '2500 грн' },
					{ label: 'Тонування задніх стопів', price: '4100 грн' }, // ~4169
				],
			},
			{
				label: 'Антихром',
				price: 'Договірна ціна',
				isExpanded: false,
			},
		],
	},
	{
		title: 'Пікап',
		imgWidth: 213,
		imgHeight: 75,
		imgUrl: '/service-examples/picap.png',
		type: 'picap',
		serviceType: 'pallete',
		services: [
			{
				label: 'Фарбування',
				isExpanded: true,
				subServices: [
					{ label: 'Заміна кольору', price: '200 грн' },
					{ label: 'Плівка полеуритан', price: '125000 грн' }, // ~125070
					{ label: 'Плівка гібридна', price: '121000 грн' }, // ~120901
					{ label: 'Плівка винилоновая', price: '109000 грн' }, // ~108394
					{
						label: 'Покраска суппоротов без снятия',
						price: '6000 грн',
					},
					{
						label: 'Перетягивание | покраска кожи седенья',
						price: '350 грн',
					},
					{ label: 'Перетяжка потолков', price: '300 грн' },
				],
			},
			{
				label: 'Тонування',
				isExpanded: true,
				subServices: [
					{ label: 'Повне тонування', price: '7000 грн' },
					{ label: 'Тонування бокового скла', price: '1100 грн' },
					{ label: 'Тонування лобового скла', price: '2500 грн' },
					{ label: 'Тонування заднього скла', price: '2500 грн' },
					{ label: 'Тонування задніх стопів', price: '4100 грн' }, // ~4169
				],
			},
			{
				label: 'Антихром',
				price: 'Договірна ціна',
				isExpanded: false,
			},
		],
	},
]

// Transform function to convert IServicePriceGroup to IServiceMenu format
export function transformServicePriceToMenu(serviceGroup: any): IServiceMenu[] {
	if (!serviceGroup || !Array.isArray(serviceGroup)) {
		return []
	}

	return serviceGroup.map((group: any) => ({
		title: group.title || '',
		isExpanded: group.isExpanded || false,
		services: group.services || [],
	}))
}

// Transform individual service price items to menu format
export function transformServicePriceItemsToMenu(
	services: any[]
): IServiceMenu[] {
	if (!services || !Array.isArray(services)) {
		return []
	}

	return services
		.filter(service => service.isExpanded && service.subServices)
		.map(service => ({
			title: service.label,
			isExpanded: false,
			services: service.subServices.map((subService: any) => ({
				label: subService.label,
				price: subService.price,
			})),
		}))
}
