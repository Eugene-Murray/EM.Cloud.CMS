define(['plugins/router'], function(router) {
   return {
      router: router,
      activate: function() {
         router.map([
            { route: ['catalog', ''], title: 'Catalog', moduleId: 'viewmodels/catalog', nav: true },
            { route: 'admin', title: 'Admin', moduleId: 'viewmodels/admin', nav: true },
            { route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: true }
         ]).buildNavigationModel();

         router.mapUnknownRoutes('viewmodels/catalog', "#catalog");

         return router.activate();
      },
   };
});