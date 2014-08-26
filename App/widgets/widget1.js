﻿define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    vm.title = ko.observable('Widget 1');
    vm.items = ko.observableArray([{ name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 }]);
    
    vm.activate = function () {
        vm.items([{ name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 },
        { name: 'one', value: 10 },
        { name: 'two', value: 20 },
        { name: 'three', value: 30 }]);
    };

    return vm;
});