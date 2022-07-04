module.exports = {
	title: 'DerekFields.is/...',
	description: 'An Educator. A Software Developer. A Maker.',
	head: [
		['link', { rel: 'icon', href: `/logo.png` }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'canonical', href: 'https://derekfields.is' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
		['meta', { name: "application-name", content: "Welcome To My Site | DerekFields.is/..." }],
		['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }],
		['meta', { name: 'msapplication-square70x70logo', content: '/icons/mstile-70x70.png' }],
		['meta', { name: 'msapplication-square150x150logo', content: '/icons/mstile-150x150.png' }],
		['meta', { name: 'msapplication-wide310x150logo', content: '/icons/mstile-310x150.png' }],
		['meta', { name: 'msapplication-square310x310logo', content: '/icons/mstile-310x310.png' }],
		['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
		['script', { type: "text/javascript", src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
	],
	serviceWorker: true,
	themeConfig: {
        nav: [
			{ text: "Home", link: '/' },
			{ text: 'Blogging', link: '/blogging/' },
			{ text: 'Resume', link: '/resume/' },
			{ text: 'Freelancing', link: '/freelancing/' },
			{
				text: 'Socials', items: [
					{ text: 'Twitter', link: 'https://mobile.twitter.com/DJFalcon23' },
					{ text: 'Github', link: 'https://www.github.com/djfalcon23' },
					{ text: 'DevPost', link: 'https://devpost.com/Djfalcon23'},
					{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/derek-j-fields'}
				]
			}
		],
		serviceWorker: {
			updatePopup: true,
		}

	},
	configureWebpack: {
		resolve: {
			alias: {
				'@alias': '../Assets2',
				'@alias_Home': './Assets2'
			}
		}
	}
}
