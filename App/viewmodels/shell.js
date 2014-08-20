define(['durandal/app', 'plugins/router'], function(app, router) {
   return {
      router: router,
      activate: function() {
          router.map([
            { route: ['page', ''], title: 'Home', moduleId: 'viewmodels/page', nav: true },
            { route: 'siteConfiguration', title: 'Site Configuration', moduleId: 'viewmodels/siteConfiguration', nav: false },
            { route: 'listOfDeals', title: 'Deals', moduleId: 'viewmodels/listOfDeals', nav: true },
            { route: 'details', title: 'List Of Deals - Details', moduleId: 'viewmodels/detail', nav: false },
            { route: 'catalog', title: 'Input Workflow', moduleId: 'viewmodels/catalog', nav: true },
            { route: 'inputWorkflow*details', title: 'Input Workflow 2', moduleId: 'viewmodels/inputWorkflow/inputWorkflowHome', nav: true },
            { route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: false },
            { route: 'knockout-samples*details', moduleId: 'ko/index', title: 'KO', nav: true },
            { route: 'cards/:param1*details', title: 'Cards', moduleId: 'viewmodels/cards', hash: '#cards', nav: false }               
         ]).buildNavigationModel();

          router.mapUnknownRoutes('viewmodels/page', "#page");

         return router.activate();
      },
      randomChecked: false,
      randomChanged: function() {
         app.trigger('randomChanged', this.randomChecked);
         return true;
      }
   };
});