define(['durandal/app', 'plugins/router'], function(app, router) {
   return {
      router: router,
      activate: function() {
          router.map([
            { route: ['home', ''], title: 'Home', moduleId: 'viewmodels/home', nav: true },
            { route: 'siteConfiguration', title: 'Site Configuration', moduleId: 'viewmodels/siteConfiguration', nav: true },
            { route: 'page', title: 'Page', moduleId: 'viewmodels/page', nav: true },
            { route: 'catalog', title: 'Input Screens', moduleId: 'viewmodels/catalog', nav: true },
            { route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: true },
            { route: 'knockout-samples*details', moduleId: 'views/ko/index', title: 'Knockout Samples', nav: true },
            { route: 'cards/:param1*details', title: 'Cards', moduleId: 'viewmodels/cards', hash: '#cards', nav: false }               
         ]).buildNavigationModel();

         router.mapUnknownRoutes('viewmodels/home', "#home");

         return router.activate();
      },
      randomChecked: false,
      randomChanged: function() {
         app.trigger('randomChanged', this.randomChecked);
         return true;
      }
   };
});