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
		link: 'https://www.instagram.com/sant_avto?igsh=MXdtMWFpczF5Z2V5MA%3D%3D&utm_source=qr',
	},
	{
		image_link: '/icons/YouTube.png',
		link: 'https://youtube.com/@santavto?si=bINsRGf8FYXLXhAO',
	},
	{
		image_link: '/icons/telegram.svg',
		link: 'https://t.me/SantAvto',
	},
	{
		image_link: '/icons/tiktok.svg',
		link: 'tiktok.com',
	},
]
