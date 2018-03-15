var path = require('path');

var apos = require('apostrophe')({
    shortName: 'first-project',

    // See lib/modules for basic project-level configuration of our modules
    // responsible for serving static assets, managing page templates and
    // configuring user acounts.

    modules: {

        // Apostrophe module configuration

        // Note: most configuration occurs in the respective
        // modules' directories. See lib/apostrophe-assets/index.js for an example.

        // However any modules that are not present by default in Apostrophe must at
        // least have a minimal configuration here: `moduleName: {}`

        // If a template is not found somewhere else, serve it from the top-level
        // `views/` folder of the project

        'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

        'apostrophe-pages': {
            types: [{
                    name: 'default',
                    label: 'Default'
                },
                {
                    name: 'home',
                    label: 'Home'
                },
            ],
            filters: {
                // Grab our ancestor pages, with two levels of subpages
                ancestors: {
                    children: {
                        depth: 3
                    }
                },
                // We usually want children of the current page, too
                children: true
            }
        },

        'apostrophe-express': {
            session: {
                secret: 'supersecret'
            }
        },

        'link-widgets': {},
        'page-link-widgets': {},
        'drawer-widgets': {},
        'two-column-widgets': {}


    }
})