export interface IServiceDetail {
	asideImgUrl: string
	title: string
	buttonText: string
	bgColor: string
	opositeColor: string
	servicesList: IDetail[]
	routeLink: string
	modalType: 'detailing' | 'wrench' | 'protect' | 'pallete'
}

export interface IDetail {
	label: string
	onClickFunction?: () => void
}

export const servicesDetailList: IServiceDetail[] = [
	{
		asideImgUrl: '/services/clean.png',
		title: 'Детейлінг',
		buttonText: 'Дізнатись ціни для цієї категорії послуг',
		bgColor: 'bg-[#1F1F1F]',
		opositeColor: 'bg-[#1A1A1A]',
		modalType: 'detailing',
		servicesList: [
			{
				label: 'Хімчистка',
				onClickFunction: () => {},
			},
			{
				label: 'Полірування',
				onClickFunction: () => {},
			},
			{
				label: 'Миття підкаподного простору',
			},
		],
		routeLink: '/detailing',
	},

	{
		asideImgUrl: '/services/wrench.png',
		title: 'Кузовні роботи',
		buttonText: 'Дізнатись ціни для цієї категорії послуг',
		bgColor: 'bg-[#1A1A1A]',
		opositeColor: 'bg-[#2A2A2A]',
		modalType: 'wrench',
		servicesList: [
			{
				label: "Видалення вм'ятин без фарбування",
			},
			{
				label: 'Арматурні роботи',
			},
			{
				label: 'Шумоізоляція',
			},
			{
				label: 'Фарбування',
				onClickFunction: () => {},
			},
		],
		routeLink: '/wrench',
	},

	{
		asideImgUrl: '/services/shield.png',
		title: 'Захист авто',
		buttonText: 'Дізнатись ціни для цієї категорії послуг',
		bgColor: 'bg-[#1A1A1A]',
		opositeColor: 'bg-[#2A2A2A]',
		modalType: 'protect',
		servicesList: [
			{
				label: 'Плівка',
				onClickFunction: () => {},
			},
			{
				label: 'Антикор',
			},
			{
				label: 'Антидощ',
			},
			{
				label: 'Твердий віск',
			},
			{
				label: 'Кераміка',
			},
			{
				label: 'Нанокераміка',
			},
			{
				label: 'Рідке скло',
			},
		],
		routeLink: '/protect',
	},

	{
		asideImgUrl: '/services/palette.png',
		title: 'Стайлінг авто',
		buttonText: 'Дізнатись ціни для цієї категорії послуг',
		bgColor: 'bg-[#1F1F1F]',
		opositeColor: 'bg-[#1A1A1A]',
		modalType: 'pallete',
		servicesList: [
			{
				label: 'Заміна кольору',
			},
			{
				label: 'Кольорова плівка',
				onClickFunction: () => {},
			},
			{
				label: 'Тонування',
				onClickFunction: () => {},
			},
			{
				label: 'Антихром',
			},
		],
		routeLink: '/pallete',
	},
]
