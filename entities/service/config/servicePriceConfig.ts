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
						price: '120 $',
					},
					{
						label: 'Хімчистка підлоги / стелі салону',
						price: '1000 грн',
					},
					{
						label: 'Хімчистка дверної карти',
						price: '500 грн',
					},
					{
						label: 'Хімчистка заднього сидіння',
						price: '800 грн',
					},
					{
						label: 'Хімчистка переднього сидіння',
						price: '400 грн',
					},
					{
						label: 'Хімчистка багажного відсіку',
						price: '800 грн',
					},
					{
						label: 'Хімчистка торпеди',
						price: '1200 грн',
					},
					{
						label: 'Озонація салону',
						price: '1500 грн',
					},
				],
			},
			{
				label: 'Полірування',
				isExpanded: true,
				subServices: [
					{
						label: 'Локально (місце)',
						price: '0 грн',
					},
					{
						label: 'Косметичне полірування',
						price: '120 $',
					},
					{
						label: 'Відновлювальне полірування',
						price: '250 $',
					},
					{
						label: 'Полірування салонного глянцю',
						price: '2500 грн',
					},
					{
						label: 'Фара (шліфування + полірування)',
						price: '0 грн',
					},
					{
						label: 'Миття підкапотного простору',
						price: '2500 грн',
					},
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
						price: '120$',
					},
					{
						label: 'Хімчистка підлоги / стелі салону',
						price: '1000 грн',
					},
					{
						label: 'Хімчистка дверної карти',
						price: '500 грн',
					},
					{
						label: 'Хімчистка заднього сидіння',
						price: '800 грн',
					},
					{
						label: 'Хімчистка переднього сидіння',
						price: '400 грн',
					},
					{
						label: 'Хімчистка багажного відсіку',
						price: '800 грн',
					},
					{
						label: 'Хімчистка торпеди',
						price: '1200 грн',
					},
					{
						label: 'Озонація салону',
						price: '1500 грн',
					},
				],
			},
			{
				label: 'Полірування',
				isExpanded: true,
				subServices: [
					{
						label: 'Локально (місце)',
						price: '0 грн',
					},
					{
						label: 'Косметичне полірування',
						price: '150 $',
					},
					{
						label: 'Відновлювальне полірування',
						price: '270 $',
					},
					{
						label: 'Полірування салонного глянцю',
						price: '2500 грн',
					},
					{
						label: 'Фара (шліфування + полірування)',
						price: '0 грн',
					},
					{
						label: 'Миття підкапотного простору',
						price: '2500 грн',
					},
				],
			},

			{
				label: 'Миття підкапотноного простору',
				isExpanded: false,
				price: '0 грн',
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
						price: '120$',
					},
					{
						label: 'Хімчистка підлоги / стелі салону',
						price: '1000 грн',
					},
					{
						label: 'Хімчистка дверної карти',
						price: '500 грн',
					},
					{
						label: 'Хімчистка заднього сидіння',
						price: '800 грн',
					},
					{
						label: 'Хімчистка переднього сидіння',
						price: '400 грн',
					},
					{
						label: 'Хімчистка багажного відсіку',
						price: '800 грн',
					},
					{
						label: 'Хімчистка торпеди',
						price: '1200 грн',
					},
					{
						label: 'Озонація салону',
						price: '1500 грн',
					},
				],
			},
			{
				label: 'Полірування',
				isExpanded: true,
				subServices: [
					{
						label: 'Локально (місце)',
						price: '0 грн',
					},
					{
						label: 'Косметичне полірування',
						price: '170 $',
					},
					{
						label: 'Відновлювальне полірування',
						price: '290 $',
					},
					{
						label: 'Полірування салонного глянцю',
						price: '2500 грн',
					},
					{
						label: 'Фара (шліфування + полірування)',
						price: '0 грн',
					},
					{
						label: 'Миття підкапотного простору',
						price: '2500 грн',
					},
				],
			},

			{
				label: 'Миття підкапотноного простору',
				isExpanded: false,
				price: '0 грн',
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
					{
						label: 'Рихтування',
						price: 'Договірна ціна',
					},
					{
						label: 'Фарбування + арматурні роботи для окремої деталі',
						price: '150 $',
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
					{
						label: 'Рихтування',
						price: 'Договірна ціна',
					},
					{
						label: 'Фарбування + арматурні роботи для окремої деталі',
						price: '150 $',
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
					{
						label: 'Рихтування',
						price: 'Договірна ціна',
					},
					{
						label: 'Фарбування + арматурні роботи для окремої деталі',
						price: '150 $',
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
			{
				label: 'Кераміка',
				price: '175 $',
				isExpanded: false,
			},
			{
				label: 'Нанокераміка',
				price: '175 $',
				isExpanded: false,
			},
			{
				label: 'Шумоізоляція',
				price: '1500 $',
				isExpanded: false,
			},
			{
				label: 'Антидощ',
				price: '1500 грн',
				isExpanded: false,
			},
			{
				label: 'Антикор',
				price: '800 $',
				isExpanded: false,
			},
			{
				label: 'Твердий віск',
				price: '500 грн',
				isExpanded: false,
			},

			{
				label: 'Плівка',
				isExpanded: true,

				subServices: [
					{
						label: 'Повне обклеювання авто',
						price: '2500 $',
					},
					{
						label: 'Захисна плівка-смужка на дах',
						price: '50 $',
					},
					{
						label: 'Захисна плівка на фари',
						price: '100 $',
					},
					{
						label: 'Захисна плівка на дзеркала',
						price: '3000 грн',
					},
					{
						label: 'Захисна плівка під ручками',
						price: '1800 грн',
					},
					{
						label: 'Захисна плівка на кант дверей',
						price: '1500 грн',
					},
					{
						label: 'Захисна смужка на задній бампер',
						price: '50 $',
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
			{
				label: 'Кераміка',
				price: '200 $',
				isExpanded: false,
			},
			{
				label: 'Нанокераміка',
				price: '200 $',
				isExpanded: false,
			},
			{
				label: 'Шумоізоляція',
				price: '1800 $',
				isExpanded: false,
			},
			{
				label: 'Антидощ',
				price: '1500 грн',
				isExpanded: false,
			},
			{
				label: 'Антикор',
				price: '800 $',
				isExpanded: false,
			},
			{
				label: 'Твердий віск',
				price: '500 грн',
				isExpanded: false,
			},
			{
				label: 'Плівка',
				isExpanded: true,

				subServices: [
					{
						label: 'Повне обклеювання авто',
						price: '2800 $',
					},
					{
						label: 'Захисна плівка-смужка на дах',
						price: '50 $',
					},
					{
						label: 'Захисна плівка на фари',
						price: '100 $',
					},
					{
						label: 'Захисна плівка на дзеркала',
						price: '3000 грн',
					},
					{
						label: 'Захисна плівка під ручками',
						price: '1800 грн',
					},
					{
						label: 'Захисна плівка на кант дверей',
						price: '1500 грн',
					},
					{
						label: 'Захисна смужка на задній бампер',
						price: '50 $',
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
			{
				label: 'Кераміка',
				price: '230 $',
				isExpanded: false,
			},
			{
				label: 'Нанокераміка',
				price: '230 $',
				isExpanded: false,
			},
			{
				label: 'Шумоізоляція',
				price: '2000 $',
				isExpanded: false,
			},
			{
				label: 'Антидощ',
				price: '1500 грн',
				isExpanded: false,
			},
			{
				label: 'Антикор',
				price: '800 $',
				isExpanded: false,
			},
			{
				label: 'Твердий віск',
				price: '500 грн',
				isExpanded: false,
			},
			{
				label: 'Плівка',
				isExpanded: true,
				subServices: [
					{
						label: 'Повне обклеювання авто',
						price: '3200 $',
					},
					{
						label: 'Захисна плівка-смужка на дах',
						price: '50 $',
					},
					{
						label: 'Захисна плівка на фари',
						price: '100 $',
					},
					{
						label: 'Захисна плівка на дзеркала',
						price: '3000 грн',
					},
					{
						label: 'Захисна плівка під ручками',
						price: '1800 грн',
					},
					{
						label: 'Захисна плівка на кант дверей',
						price: '1500 грн',
					},
					{
						label: 'Захисна смужка на задній бампер',
						price: '50 $',
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
					{
						label: 'Заміна кольору',
						price: '200 грн',
					},
					{
						label: 'Плівка полеуритан',
						price: '2500 $',
					},
					{
						label: 'Плівка гібридна',
						price: '2400 $',
					},
					{
						label: 'Плівка винилоновая',
						price: '2200 $',
					},
					{
						label: 'Покраска суппоротов без снятия',
						price: '6000 грн',
					},
					{
						label: 'Перетягивание | покраска кожи седенья',
						price: '350 грн',
					},
					{
						label: 'Перетяжка потолков',
						price: '300 грн',
					},
				],
			},

			{
				label: 'Тонування',
				isExpanded: true,
				subServices: [
					{
						label: 'Повне тонування',
						price: '7000 грн',
					},
					{
						label: 'Тонування бокового скла',
						price: '1100 грн',
					},
					{
						label: 'Тонування лобового скла',
						price: '2500 грн',
					},
					{
						label: 'Тонування заднього скла',
						price: '2500 грн',
					},
					{
						label: 'Тонування задніх стопів',
						price: '100 $',
					},
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
					{
						label: 'Заміна кольору',
						price: '200 грн',
					},
					{
						label: 'Плівка полеуритан',
						price: '2800 $',
					},
					{
						label: 'Плівка гібридна',
						price: '2700 $',
					},
					{
						label: 'Плівка винилоновая',
						price: '2400 $',
					},
					{
						label: 'Покраска суппоротов без снятия',
						price: '6000 грн',
					},
					{
						label: 'Перетягивание | покраска кожи седенья',
						price: '350 грн',
					},
					{
						label: 'Перетяжка потолков',
						price: '300 грн',
					},
				],
			},

			{
				label: 'Тонування',
				isExpanded: true,
				subServices: [
					{
						label: 'Повне тонування',
						price: '7000 грн',
					},
					{
						label: 'Тонування бокового скла',
						price: '1100 грн',
					},
					{
						label: 'Тонування лобового скла',
						price: '2500 грн',
					},
					{
						label: 'Тонування заднього скла',
						price: '2500 грн',
					},
					{
						label: 'Тонування задніх стопів',
						price: '100 $',
					},
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
					{
						label: 'Заміна кольору',
						price: '200 грн',
					},
					{
						label: 'Плівка полеуритан',
						price: '3000 $',
					},
					{
						label: 'Плівка гібридна',
						price: '2900 $',
					},
					{
						label: 'Плівка винилоновая',
						price: '2600 $',
					},
					{
						label: 'Покраска суппоротов без снятия',
						price: '6000 грн',
					},
					{
						label: 'Перетягивание | покраска кожи седенья',
						price: '350 грн',
					},
					{
						label: 'Перетяжка потолков',
						price: '300 грн',
					},
				],
			},

			{
				label: 'Тонування',
				isExpanded: true,
				subServices: [
					{
						label: 'Повне тонування',
						price: '7000 грн',
					},
					{
						label: 'Тонування бокового скла',
						price: '1100 грн',
					},
					{
						label: 'Тонування лобового скла',
						price: '2500 грн',
					},
					{
						label: 'Тонування заднього скла',
						price: '2500 грн',
					},
					{
						label: 'Тонування задніх стопів',
						price: '100 $',
					},
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
