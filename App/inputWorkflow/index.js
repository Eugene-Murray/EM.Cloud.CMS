define(['plugins/router', 'durandal/system', 'knockout'], function (router, system, ko) {

    var childRouter = router.createChildRouter()
            .makeRelative({
                moduleId: 'inputWorkflow',
                fromParent: true
            }).map([
                { route: '', moduleId: 'teamSheets/index', title: 'Team Sheets', type: 'intro' },
                { route: 'teamSheets', moduleId: 'teamSheets/index', title: 'Team Sheets', type: 'intro', nav: true },
                { route: 'addOrder', moduleId: 'addOrder/index', title: 'Add Order', type: 'intro', nav: true },
                { route: 'masterBook', moduleId: 'masterBook/index', title: 'Master Book', type: 'intro', nav: true },
                { route: 'tradeSubmission', moduleId: 'tradeSubmission/index', title: 'Trade Submission', type: 'intro', nav: true },
                { route: 'salesCredits', moduleId: 'salesCredits/index', title: 'Sales Credits', type: 'intro', nav: true }
            ]).buildNavigationModel();

    return {
        router: childRouter,
        introSamples: ko.computed(function () {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function (route) {
                return route.type == 'intro';
            });
        })

    };
});