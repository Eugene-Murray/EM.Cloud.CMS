define(['plugins/router', 'knockout'], function (router, ko) {
    //var childRouter = router.createChildRouter()
    //    .makeRelative({
    //        //moduleId: 'inputWorkflow',
    //        fromParent: true
    //    }).map([
    //        { route: ['', 'inputWorkflowHome'], moduleId: 'viewmodels/inputWorkflowHome', title: 'Start', type: 'intro', nav: true },
    //        { route: 'teamSheets', moduleId: 'viewmodels/teamSheets', title: 'Team Sheets', type: 'intro', nav: true },
    //        { route: 'addOrder', moduleId: 'viewmodels/addOrder', title: 'Add Order', type: 'intro', nav: true },
    //        { route: 'masterBook', moduleId: 'viewmodels/masterBook', title: 'Master Book', type: 'intro', nav: true },
    //        { route: 'tradeSubmission', moduleId: 'viewmodels/tradeSubmission', title: 'Trade Submission', type: 'intro', nav: true },
    //        { route: 'salesCredits', moduleId: 'viewmodels/salesCredits', title: 'Sales Credits', type: 'intro', nav: true }
    //    ]).buildNavigationModel();

    //return {
    //    router: childRouter,
    //    introSamples: ko.computed(function () {
    //        return ko.utils.arrayFilter(childRouter.navigationModel(), function (route) {
    //            return route.type == 'intro';
    //        });
    //    })
        
    //};
});
