define(['durandal/system', 'durandal/app', 'knockout', 'templatePage/templateBase', 'plugins/router', 'toastr'], function (system, app, ko, templateBase, router, toastr) {

    var vm = templateBase;

    app.on('changeTemplate4').then(function (obj) {
        vm.pageStrctureTemplate = ko.observable(vm.pageStructureTemplatePath + '4Section-PageStructureTemplate.html');
        vm.section1 = ko.observable(vm.widgetPath + 'widget1');
        vm.section2 = ko.observable(vm.widgetPath + 'widget11');
        vm.section3 = ko.observable(vm.widgetPath + 'widget12');
        vm.section4 = ko.observable(vm.widgetPath + 'widget13');
        toastr.info('Successfully updated the Home Page');
        //toastr.info("Team successfully created");
    });

    app.on('changeTemplate2').then(function (obj) {
        vm.pageStrctureTemplate = ko.observable(vm.pageStructureTemplatePath + '10Section-PageStructureTemplate.html');
        self.section1 = ko.observable(self.widgetPath + 'widget1');
        self.section2 = ko.observable(self.widgetPath + 'widget2');
        self.section3 = ko.observable(self.widgetPath + 'widget3');
        self.section4 = ko.observable(self.widgetPath + 'widget4');
        self.section5 = ko.observable(self.widgetPath + 'widget5');
        self.section6 = ko.observable(self.widgetPath + 'widget6');
        self.section7 = ko.observable(self.widgetPath + 'widget7');
        self.section8 = ko.observable(self.widgetPath + 'widget8');
        self.section9 = ko.observable(self.widgetPath + 'widget9');
        self.section10 = ko.observable(self.widgetPath + 'widget10');
        toastr.info('Successfully updated the Home Page');
    });

    return vm;
});