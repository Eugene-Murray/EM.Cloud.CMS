define(['durandal/app', 'plugins/router'], function(app, router) {



   return {
       router: router,
       activate: function () {
           return router.map([
              { route: ['home', ''], title: 'Home', moduleId: 'templatePage/index', nav: true },
              { route: 'addOrder', moduleId: 'addOrder/index', title: 'Add Order', nav: true },
              { route: 'inputWorkflow*details', title: 'Workflow', moduleId: 'inputWorkflow/index', nav: true, hash: '#inputWorkflow' },
              { route: 'siteConfiguration', title: 'Site Configuration', moduleId: 'siteConfiguration/index', nav: false },
              { route: 'about', title: 'About', moduleId: 'About/about', nav: true },
              { route: 'test', title: 'Test', moduleId: 'Test/index', nav: true }
           ]).buildNavigationModel()
             .mapUnknownRoutes('home', "#home")
             .activate();
       }
   };
});