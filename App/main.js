
requirejs.config({
   paths: {
      'text': '../Scripts/text',
      'durandal': '../Scripts/durandal',
      'plugins': '../Scripts/durandal/plugins',
      'transitions': '../Scripts/durandal/transitions'
   }
});

define('jquery', function() { return jQuery; });
define('knockout', ko);
define('kendo', kendo);
define('kokendo', ko.kendo);
define('infuser', infuser);
define('toastr', toastr);
define('underscore', _);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'infuser'], function (system, app, viewLocator, infuser) {
   //>>excludeStart("build", true);
   system.debug(true);
   //>>excludeEnd("build");

   app.title = 'BaSE';

   app.configurePlugins({
      router: true,
      dialog: true,
      widget: true,
      observable: true
   });

   app.start().then(function() {

       infuser.defaults.templateUrl = "app/views/widgets/";
       //infuser.defaults.templateSuffix = "";
       //infuser.defaults.loadingTemplate.content = '<div class="val-loading-container val-loading-container-xs val-padding pull-left">'
       //                                                + '<div class="val-rotation-loading">'
       //                                                    + '<div><div><div><div><div><div>'
       //                                                    + '</div></div></div></div></div></div>'
       //                                                + '</div>'
       //                                            + '</div>';

      //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
      //Look for partial views in a 'views' folder in the root.
      viewLocator.useConvention();

      //Show the app by setting the root view model for our application with a transition.
      app.setRoot('viewmodels/shell', 'entrance');
   });
});