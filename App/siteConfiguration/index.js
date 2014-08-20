define(['durandal/system', 'durandal/app', 'knockout', 'plugins/router', 'toastr'], function (system, app, ko, router, toastr) {

    var vm = {};
    vm.txt = 'observable';
    vm.router = router;
    vm.num = 0;

    vm.addPage = function () {
        var routes = vm.router.routes;
        vm.num++;
        vm.router.reset();
        routes.push({ route: 'About' + vm.num, title: 'About' + vm.num, moduleId: 'About/about2', nav: true });

        vm.router.map(routes);

        vm.router.buildNavigationModel();
    };

    vm.changeTemplate4 = function () {
        app.trigger('changeTemplate4', null);
    };

    vm.changeTemplate2 = function () {
        app.trigger('changeTemplate2', null);
    };


    return vm;
});