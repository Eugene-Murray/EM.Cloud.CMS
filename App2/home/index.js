define(['durandal/system', 'durandal/app', 'knockout', 'toastr'], function (system, app, ko, toastr) {

    var vm = {};
    vm.template = ko.observable('home/default');
    vm.title = ko.observable('Home');

    app.on('changeTemplateDefault').then(function (obj) {
        vm.template = ko.observable('home/default');
        toastr.info('Successfully updated the Home Page');
    });

    app.on('changeTemplateAlt').then(function (obj) {
        vm.template = ko.observable('home/alt');
        toastr.info('Successfully updated the Home Page');
    });

   

    return vm;
});