module.exports = {
    title: 'DerekFields.is/...',
	description:'Many cool things. Welcome to my site.',
	head: [
		['link', { rel: 'icon', href: `/logo.png` } ],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'canonical', href: 'https://derekfields.is' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
		['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }],
		['script', { type:"text/javascript", src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}]
	],
	serviceWorker: true,
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: 'Blogging', link: '/blogging/' },
			{ text: 'Freelancing', link: '/freelancing/'},
			{ text: 'Followed ',items: [
          		{ text: 'Twitter', link: 'https://mobile.twitter.com/DJFalcon23'},
				{ text: 'Github', link: 'https://www.github.com/djfalcon23' }
        		]}
        	],
        
	},
	configureWebpack: {
		resolve: {
		  alias: {
			'@alias': '../Assets2',
			'@alias_Home':'./Assets2'
		  }
		}
	  }
}