define(['durandal/system', 'durandal/app', 'knockout', 'plugins/router', 'toastr'], function (system, app, ko, router, toastr) {

    var vm = {};
    vm.txt = 'observable';
    vm.router = router;
    vm.num = 0;

    vm.selectedPageStructureTemplate = ko.observable();
    vm.allPageStructureTemplatesList = ko.observableArray([]);
    vm.allWidgetsList

    vm.addTestPage = function () {
        var routes = vm.router.routes;
        vm.num++;
        vm.router.reset();
        routes.push({ route: 'About' + vm.num, title: 'About' + vm.num, moduleId: 'About/about2', nav: true });

        vm.router.map(routes);

        vm.router.buildNavigationModel();

        vm.router.navigationModel()[0].isActive(false);
    };

    vm.addTemplatePage = function () {
        var routes = vm.router.routes;
        vm.num++;
        vm.router.reset();
        routes.push({ route: 'templatePage' + vm.num, title: 'Template Page' + vm.num, moduleId: 'templatePage/index', nav: true });

        vm.router.map(routes);

        vm.router.buildNavigationModel();

        vm.router.navigationModel()[0].isActive(false);
    };

    vm.changeTemplateDefault = function () {
        app.trigger('changeTemplateDefault', null);
    };

    vm.changeTemplateAlt = function () {
        
        app.trigger('changeTemplateAlt', null);
    };

    vm.onClick_UpdateHomePage = function () {

    };


    return vm;
});