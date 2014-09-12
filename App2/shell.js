define(['durandal/app', 'plugins/router'], function(app, router) {



   return {
       router: router,
       attached : function () {
          
           // MetsiMenu
           $('#side-menu').metisMenu();

           

           // Append config box / Only for demo purpose
           //$.get("skin-config.html", function (data) {
           //   $('body').append(data);
           //});

           // minimalize menu
           $('.navbar-minimalize').click(function () {
               $("body").toggleClass("mini-navbar");
               SmoothlyMenu();
           })

           // tooltips
           $('.tooltip-demo').tooltip({
               selector: "[data-toggle=tooltip]",
               container: "body"
           })

           // Full height of sidebar
           function fix_height() {
               var heightWithoutNavbar = $("body > #wrapper").height() - 61;
               $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
           }
           fix_height();

           $(window).bind("load resize click scroll", function () {
               if (!$("body").hasClass('body-small')) {
                   fix_height();
               }
           })

           $("[data-toggle=popover]")
               .popover();


        
       },
       activate: function () {
           return router.map([
              { route: ['home', ''], title: 'Home', moduleId: 'home/index', nav: true },
              { route: 'modernBrowserUIFeatures', moduleId: 'modernBrowserUIFeatures/index', title: 'Modern Browser UI', nav: true },
              { route: 'addOrder', moduleId: 'addOrder/index', title: 'Add Order', nav: true },
              { route: 'masterBook', moduleId: 'masterBook/index', title: 'Master Book', nav: true },
              { route: 'reporting', moduleId: 'reporting/index', title: 'Reporting', nav: true }
           ]).buildNavigationModel()
             .mapUnknownRoutes('home', "#home")
             .activate();
       }
   };
});