define(['durandal/system', 'knockout', 'viewmodels/templatebase', 'plugins/router'], function (system, ko, templatebase, router) {

    var vm = {};
    vm.title = 'Home';

    vm.flip = function () {
        $('.card').toggleClass('flip');
    };
    

    return vm;
});