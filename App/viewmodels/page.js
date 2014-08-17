define(['durandal/system', 'durandal/app', 'knockout', 'viewmodels/templatebase', 'plugins/router'], function (system, app, ko, templateBase, router) {

    var vm = templateBase;

    app.on('changeTemplate4').then(function (obj) {
        vm.pageStrctureTemplate = ko.observable(vm.pageStructureTemplatePath + '4Section-PageStructureTemplate.html');
        vm.section1 = ko.observable(vm.widgetPath + 'widget10');
        vm.section2 = ko.observable(vm.widgetPath + 'widget11');
        vm.section3 = ko.observable(vm.widgetPath + 'widget12');
        vm.section4 = ko.observable(vm.widgetPath + 'widget13');
    });

    app.on('changeTemplate2').then(function (obj) {
        vm.pageStrctureTemplate = ko.observable(vm.pageStructureTemplatePath + '2Section-PageStructureTemplate.html');
        vm.section1 = ko.observable(vm.widgetPath + 'widget3');
        vm.section2 = ko.observable(vm.widgetPath + 'widget8');
    });

    return vm;
});