define(['plugins/router', 'durandal/system', 'knockout', 'underscore', 'jquery'], function (router, system, ko, _, $) {

    var showBackButton = ko.observable(false);
    var showForwardButton = ko.observable(true);

    var childRouter = router.createChildRouter()
            .makeRelative({
                moduleId: 'inputWorkflow',
                fromParent: true
            }).map([
                { route: '', moduleId: 'teamSheets/index', title: 'Team Sheets', type: 'input' },
                { route: 'teamSheets', moduleId: 'teamSheets/index', title: 'Team Sheets', type: 'input', nav: true },
                { route: 'addOrder', moduleId: 'addOrder/index', title: 'Add Order', type: 'input', nav: true },
                { route: 'masterBook', moduleId: 'masterBook/index', title: 'Master Book', type: 'input', nav: true },
                { route: 'tradeSubmission', moduleId: 'tradeSubmission/index', title: 'Trade Submission', type: 'input', nav: true },
                { route: 'salesCredits', moduleId: 'salesCredits/index', title: 'Sales Credits', type: 'input', nav: true },
                { route: 'processComplete', moduleId: 'processComplete/index', title: 'Complete', type: 'processComplete', nav: true }
            ]).buildNavigationModel();


    var activate = function () {
        //childRouter.navigationModel()[0].isActive(true);
        //showBackButton(false);
    };

    var index = 0;
    var onClick_Back = function () {
        childRouter.navigationModel()[0].isActive(false);
        index = index - 1;
        var hash = childRouter.navigationModel()[index].hash;
        childRouter.navigate(hash);

        if (index == 0)
            showBackButton(false);
    };

    var onClick_Forward = function () {
        //childRouter.navigationModel()[0].isActive(false);
       
        index = index + 1;
        var hash = childRouter.navigationModel()[index].hash;
        childRouter.navigate(hash);
        showBackButton(true);

        if (index >= 5)
            showForwardButton(false);
    };




    return {
        router: childRouter,
        inputScreens: ko.computed(function () {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function (route) {
                return route.type == 'input';
            });
        }),
        processCompleteScreens: ko.computed(function () {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function (route) {
                return route.type == 'processComplete';
            });
        }),
        onClick_Back: onClick_Back,
        onClick_Forward: onClick_Forward,
        activate: activate,
        showBackButton: showBackButton,
        showForwardButton: showForwardButton

    };
});