export interface IServiceVariation {
	title: string
	description: string
	imgUrl: string
	moreLink: string
}

export const serviceVariationList: IServiceVariation[] = [
	{
		title: "Видалення вм'ятин",
		description:
			'Видалення вм’ятин без фарбування. Повертаємо кузову первісну форму без пошкодження лакофарбового покриття. Швидко, безпечно, професійно.',
		imgUrl: '/services/img1.png',
		moreLink: '/wrench',
	},
	{
		title: 'Хімчистка',
		description:
			'Глибока хімчистка салону з усуненням плям, запахів і пилу. Відновлюємо чистоту, свіжість і естетику інтер’єру без пошкодження матеріалів.',
		imgUrl: '/services/img2.png',
		moreLink: '/detailing',
	},
	{
		title: 'Полірування',
		description:
			'Професійне полірування кузова для відновлення глибини кольору та блиску. Видаляємо дрібні подряпини й сліди зносу — авто виглядає як нове.',
		imgUrl: '/services/img3.png',
		moreLink: '/detailing',
	},
	{
		title: 'Заміна кольору',
		description:
			'Зміна кольору авто за допомогою високоякісної плівки. Стиль, захист і новий вигляд без фарбування. Швидко, акуратно, з гарантованим результатом.',
		imgUrl: '/services/img4.png',
		moreLink: '/pallete',
	},
]

export interface IServiceMenuItem {
	label: string
	price: string
}

export interface IServiceSubItem {
	label: string
	price: string
	description?: string
}

export interface IServiceMenu {
	title: string
	isExpanded?: boolean
	services: IServiceMenuItem[]
}

export const detailingMenu: IServiceMenu[] = [
	{
		title: 'Хімчистка',
		isExpanded: false,
		services: [
			{
				label: 'Повний комплекс хімчистки авто',
				price: '5000 грн',
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
		title: 'Полірування',
		isExpanded: false,
		services: [
			{
				label: 'Локально (місце)',
				price: '500 грн',
			},
			{
				label: 'Косметичне полірування',
				price: '5000 грн',
			},
			{
				label: 'Відновлювальне полірування',
				price: '10400 грн',
			},
			{
				label: 'Полірування салонного глянцю',
				price: '2500 грн',
			},
			{
				label: 'Фара (шліфування + полірування)',
				price: '2500 грн',
			},
			{
				label: 'Миття підкапотного простору',
				price: '2500 грн',
			},
		],
	},
]

export const wrenchMenu: IServiceMenu[] = [
	{
		title: 'Фарбування',
		isExpanded: false,
		services: [
			{
				label: "Видалення вм'ятин(без фарбування)",
				price: 'Договірна ціна',
			},
			{
				label: 'Арматурні роботи',
				price: 'Договірна ціна',
			},
			{
				label: 'Шумоізоляція',
				price: '62500 грн',
			},
			{
				label: 'Рихтування',
				price: 'Договірна ціна',
			},
			{
				label: 'Фарбування + арматурні роботи для окремої деталі',
				price: '6200 грн',
			},
		],
	},
]

export const protectMenu: IServiceMenu[] = [
	{
		title: 'Захист авто',
		isExpanded: false,
		services: [
			{
				label: 'Кераміка',
				price: '7200 грн',
			},
			{
				label: 'Нанокераміка',
				price: '7200 грн',
			},
			{
				label: 'Антидощ',
				price: '1500 грн',
			},
			{
				label: 'Антикор',
				price: '33300 грн',
			},
			{
				label: 'Твердий віск',
				price: '500 грн',
			},
		],
	},
	{
		title: 'Плівка',
		isExpanded: false,
		services: [
			{
				label: 'Повне обклеювання авто',
				price: '104200 грн',
			},
			{
				label: 'Захисна плівка-смужка на дах',
				price: '2000 грн',
			},
			{
				label: 'Захисна плівка на фари',
				price: '4100 грн',
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
				price: '2000 грн',
			},
			{
				label: 'Захисна плівка на пороги у проємах (нижня частина)',
				price: '3000 грн',
			},
		],
	},
]

export const palleteMenu: IServiceMenu[] = [
	{
		title: 'Фарбування',
		isExpanded: false,
		services: [
			{
				label: 'Заміна кольору',
				price: '200 грн',
			},
			{
				label: 'Плівка полеуритан',
				price: '104200 грн',
			},
			{
				label: 'Плівка гібридна',
				price: '100000 грн',
			},
			{
				label: 'Плівка винилоновая',
				price: '91700 грн',
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
				label: 'Перетягка потолков',
				price: '300 грн',
			},
		],
	},
	{
		title: 'Тонування',
		isExpanded: false,
		services: [
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
				price: '4100 грн',
			},
			{
				label: 'Антихром',
				price: 'Договірна ціна',
			},
		],
	},
]
