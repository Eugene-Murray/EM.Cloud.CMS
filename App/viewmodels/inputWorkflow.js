define(['plugins/router', 'knockout'], function (router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'ko',
            fromParent: true
        }).map([
            { route: ['', 'helloWorld'], moduleId: 'views/ko/helloWorld/index', title: 'Hello World', type: 'intro', nav: true },
            { route: 'clickCounter', moduleId: 'views/ko/clickCounter/index', title: 'Click Counter', type: 'intro', nav: true },
            { route: 'simpleList', moduleId: 'views/ko/simpleList/index', title: 'Simple List', type: 'intro', nav: true },
            { route: 'betterList', moduleId: 'views/ko/betterList/index', title: 'Better List', type: 'intro', nav: true },
            { route: 'controlTypes', moduleId: 'views/ko/controlTypes/index', title: 'Control Types', type: 'intro', nav: true },
            { route: 'collections', moduleId: 'views/ko/collections/index', title: 'Collection', type: 'intro', nav: true },
            { route: 'pagedGrid', moduleId: 'views/ko/pagedGrid/index', title: 'Paged Grid', type: 'intro', nav: true },
            { route: 'animatedTrans', moduleId: 'views/ko/animatedTrans/index', title: 'Animated Transition', type: 'intro', nav: true },
            { route: 'contactsEditor', moduleId: 'views/ko/contactsEditor/index', title: 'Contacts Editor', type: 'detailed', nav: true },
            { route: 'gridEditor', moduleId: 'views/ko/gridEditor/index', title: 'Grid Editor', type: 'detailed', nav: true },
            { route: 'shoppingCart', moduleId: 'views/ko/shoppingCart/index', title: 'Shopping Cart', type: 'detailed', nav: true }
        ]).buildNavigationModel();

    return {
        router: childRouter,
        introSamples: ko.computed(function () {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function (route) {
                return route.type == 'intro';
            });
        }),
        detailedSamples: ko.computed(function () {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function (route) {
                return route.type == 'detailed';
            });
        })
    };
});