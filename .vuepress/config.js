module.exports = {
    title: 'DerekFields.is/...',
	description:'Many cool things. Welcome to my site.',
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: 'Blogging', link: '/blogging/' },
			{ text: 'Freelancing', link: '/freelancing/'},
			{ text: 'Followed ',items: [
          		{ text: 'Twitter', link: 'twitter.com/Djfalcon23'},
				{ text: 'Github', link: 'github.com/djfalcon23' }
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