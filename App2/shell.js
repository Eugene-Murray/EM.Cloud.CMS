define(['durandal/app', 'plugins/router'], function(app, router) {



   return {
       router: router,
       attached : function () {
          
           // MetsiMenu
           $('#side-menu').metisMenu();

           // Collapse ibox function
           $('.collapse-link').click(function () {
               var ibox = $(this).closest('div.ibox');
               var button = $(this).find('i');
               var content = ibox.find('div.ibox-content');
               content.slideToggle(200);
               button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
               ibox.toggleClass('').toggleClass('border-bottom');
               setTimeout(function () {
                   ibox.resize();
                   ibox.find('[id^=map-]').resize();
               }, 50);
           });

           // Close ibox function
           $('.close-link').click(function () {
               var content = $(this).closest('div.ibox');
               content.remove();
           });

           // Small todo handler
           $('.check-link').click(function () {
               var button = $(this).find('i');
               var label = $(this).next('span');
               button.toggleClass('fa-check-square').toggleClass('fa-square-o');
               label.toggleClass('todo-completed');
               return false;
           });

           // Append config box / Only for demo purpose
           $.get("skin-config.html", function (data) {
              $('body').append(data);
           });

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
              { route: ['home', ''], title: 'Home', moduleId: 'home/index', nav: true }
           ]).buildNavigationModel()
             .mapUnknownRoutes('home', "#home")
             .activate();
       }
   };
});