
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
//define('kendo', kendo);
//define('kokendo', ko.kendo);
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
      widget: true//,
      //observable: true
   });

   app.start().then(function() {

       infuser.defaults.templateUrl = "app/widgets/";
       //infuser.defaults.templateSuffix = "";
       infuser.defaults.loadingTemplate.content = "<i class='fa fa-spinner fa-spin fa-2x active'></i>";
       

      //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
      //Look for partial views in a 'views' folder in the root.
      viewLocator.useConvention();

      //Show the app by setting the root view model for our application with a transition.
       app.setRoot('shell', 'entrance');
   });
});