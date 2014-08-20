define(['durandal/app', 'plugins/router'], function(app, router) {
   //return {
   //   router: router,
   //   activate: function() {
   //       router.map([
   //         { route: ['home', ''], title: 'Home', moduleId: 'templatePage/index', nav: true },
   //         { route: 'knockout-samples*details', moduleId: 'ko/index', title: 'Knockout Samples', nav: true }
   //         //{ route: 'siteConfiguration', title: 'Site Configuration', moduleId: 'viewmodels/siteConfiguration', nav: false },
   //         //{ route: 'listOfDeals', title: 'Deals', moduleId: 'viewmodels/listOfDeals', nav: true },
   //         //{ route: 'details', title: 'List Of Deals - Details', moduleId: 'viewmodels/detail', nav: false },
   //         //{ route: 'catalog', title: 'Input Workflow', moduleId: 'viewmodels/catalog', nav: true },
   //         //{ route: 'inputWorkflow*details', title: 'Input Workflow 2', moduleId: 'viewmodels/inputWorkflow/inputWorkflowHome', nav: true },
   //         //{ route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: false },
   //         //{ route: 'knockout-samples*details', moduleId: 'ko/index', title: 'KO', nav: true } //,

   //         //{ route: 'cards/:param1*details', title: 'Cards', moduleId: 'viewmodels/cards', hash: '#cards', nav: false }               
   //      ]).buildNavigationModel();

   //       router.mapUnknownRoutes('home', "#home");

   //      return router.activate();
   //   },
   //   randomChecked: false,
   //   randomChanged: function() {
   //      app.trigger('randomChanged', this.randomChecked);
   //      return true;
   //   }
   //};


   return {
       router: router,
       activate: function () {
           return router.map([
              { route: ['home', ''], title: 'Home', moduleId: 'templatePage/index', nav: true },
              { route: 'listOfDeals', title: 'Deals', moduleId: 'deals/index', nav: true },
              { route: 'details', title: 'List Of Deals - Details', moduleId: 'deals/detail', nav: false },
              { route: 'inputWorkflow*details', title: 'Workflow', moduleId: 'inputWorkflow/index', nav: true, hash: '#inputWorkflow' },
              { route: 'siteConfiguration', title: 'Site Configuration', moduleId: 'siteConfiguration/index', nav: false },
              { route: 'about', title: 'About', moduleId: 'about/index', nav: false }
           ]).buildNavigationModel()
             .mapUnknownRoutes('home', "#home")
             .activate();
       }
   };
});