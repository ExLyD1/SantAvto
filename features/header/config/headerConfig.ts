export interface IHeaderLink {
	label: string
	link: string
}

export const headerLinks: IHeaderLink[] = [
	{
		label: 'Головна',
		link: '/',
	},
	{
		label: 'Послуги',
		link: '/services',
	},
	{
		label: 'Портфоліо',
		link: '/portfolio',
	},
]
