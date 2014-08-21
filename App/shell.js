define(['durandal/app', 'plugins/router'], function(app, router) {



   return {
       router: router,
       activate: function () {
           return router.map([
              { route: ['home', ''], title: 'Home', moduleId: 'templatePage/index', nav: true },
              { route: 'listOfDeals', title: 'Deals', moduleId: 'deals/index', nav: true },
              { route: 'details', title: 'List Of Deals - Details', moduleId: 'deals/detail', nav: false },
              { route: 'inputWorkflow*details', title: 'Workflow', moduleId: 'inputWorkflow/index', nav: true, hash: '#inputWorkflow' },
              { route: 'siteConfiguration', title: 'Site Configuration', moduleId: 'siteConfiguration/index', nav: false },
              { route: 'about', title: 'About', moduleId: 'About/about', nav: true }
           ]).buildNavigationModel()
             .mapUnknownRoutes('home', "#home")
             .activate();
       }
   };
});