var apos = require('apostrophe')({
shortName: 'apo-portfolio',
title: 'Portfolio',

// See lib/modules for basic project-level configuration of our modules
// responsible for serving static assets, managing page templates and
// configuring user acounts.

modules: {
// Add custom apostrophe-modules and their respective configuration here!
	'apostrophe-express': {
  port: 3000, // You can decide on which port to listen to run the app (ex: http://localhost:8080)
  session: {
   secret: 'WhateverTheRandomSecretYouWant'  // Any type of string works, rather be not too short
  }
}
	// This configures our default page template
    'apostrophe-pages': {
      types: [
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        },
      ]
    }
}
}); 