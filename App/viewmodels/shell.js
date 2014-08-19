define(['durandal/app', 'plugins/router'], function(app, router) {
   return {
      router: router,
      activate: function() {
          router.map([
            { route: ['page', ''], title: 'Home', moduleId: 'viewmodels/page', nav: true },
            { route: 'siteConfiguration', title: 'Site Configuration', moduleId: 'viewmodels/siteConfiguration', nav: false },
            { route: 'listOfDeals', title: 'List Of Deals', moduleId: 'viewmodels/listOfDeals', nav: true },
            { route: 'details', title: 'List Of Deals - Details', moduleId: 'viewmodels/detail', nav: false },
            { route: 'catalog', title: 'Input Workflow', moduleId: 'viewmodels/catalog', nav: true },
            { route: 'inputWorkflow', title: 'Input Workflow 2', moduleId: 'viewmodels/inputWorkflow', nav: true },
            { route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: false },
            { route: 'knockout-samples*details', moduleId: 'views/ko/index', title: 'Sub Menu', nav: false },
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