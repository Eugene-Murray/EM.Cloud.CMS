define(['durandal/app', 'plugins/router'], function(app, router) {



   return {
       router: router,
       attached : function () {
           $('.navbar-minimalize').click(function () {
               $("body").toggleClass("mini-navbar");
               SmoothlyMenu();
           });
        
       },
       activate: function () {
           return router.map([
              { route: ['home', ''], title: 'Home', moduleId: 'home/index', nav: true }
           ]).buildNavigationModel()
             .mapUnknownRoutes('home', "#home")
             .activate();
       }
   };
});