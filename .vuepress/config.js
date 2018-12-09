module.exports = {
    title: 'DerekFields.is/...',
	description:'Many cool things. Welcome to my site.',
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
			'@alias': '../Assets2'
		  }
		}
	  }
}