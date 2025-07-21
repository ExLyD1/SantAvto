export interface IFooterLink {
	label: string
	link: string
}

export const footerLinks: IFooterLink[] = [
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
	{
		label: 'Реклама',
		link: '/advertisment',
	},
]

export interface IFooterSocialMedia {
	image_link: string
	link: string
}

export const footerSocialMedia: IFooterSocialMedia[] = [
	{
		image_link: '/icons/instagram.svg',
		link: '/instagram.com',
	},
	{
		image_link: '/icons/youtube.svg',
		link: '/youtube.com',
	},
	{
		image_link: '/icons/telegram.svg',
		link: '/telegram.com',
	},
	{
		image_link: '/icons/tiktok.svg',
		link: '/tiktok.com',
	},
]
