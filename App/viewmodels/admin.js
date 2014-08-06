define(['durandal/system'], function (system) {
    var vm = {};

    vm.activate = function () {
        system.log('** activate admin');
    };

    vm.attached = function () {
        system.log('** attached admin');
    };

    vm.canActivate = function () {
        system.log('** canActivate admin');
        return true;
    };

    return vm;
});