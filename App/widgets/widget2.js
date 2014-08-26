define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    vm.title = ko.observable('Widget 2');
    vm.gaugeValue = ko.observable(25);
    
    vm.activate = function () {
        vm.gaugeValue(30);
    };

    return vm;
});