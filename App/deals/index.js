define(['durandal/system', 'knockout',  'plugins/router', 'kendo', 'kokendo', 'require'], function (system, ko, router, kendo, kokendo, require) {
    //debugger;
    var vm = {};
    
    vm.title = 'Home';
    vm.mykendo = kendo;
    vm.mykokendo = kokendo;
    vm.templateNameFront = ko.observable('widget1');
    vm.templateNameBack = 'widget2';
    vm.selectedRow = ko.observable('');
    vm.frontViewModel = ko.observable();
    
    vm.listOfDeals = ko.observableArray([
        { id: 1, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 1", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 2, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 2", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 3, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 3", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 4, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 4", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 5, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 5", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 6, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 6", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 7, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 7", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 8, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 8", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 9, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 9", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 10, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 10", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 11, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 11", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 12, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 12", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 13, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 13", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 14, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 14", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 15, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 15", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 16, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 16", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 17, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 17", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 18, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 18", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 19, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 19", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
        { id: 20, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 20", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },

    ]);

    

    vm.activate = function () {
        // Composition & Activator
        vm.SetupKendoGrids();

        //if (vm.templateNameFront() == '') {
            require(['widgets/widget1'], function (widget1) {
                vm.frontViewModel(widget1);
                vm.templateNameFront('widget1');
            });
        //}
    };

   

    // Functions
    vm.flip = function () {
        $('.card').toggleClass('flip');
    };

    vm.changeWidgetFront = function () {
        //if (vm.templateNameFront == ''widget')
        vm.templateNameFront('widget5');
    };

    vm.changeWidgetBack = function () {
        vm.templateNameBack = 'widget12';
    };

    vm.onClickRow = function () {
        vm.selectedRow(this);

        
    };

    vm.onClick_OpenDetails = function () {
        router.navigate('#details');
    };

    vm.SetupKendoGrids = function () {

        vm.ListOfDealsTable = {
            data: vm.listOfDeals,
            columns: [
                { field: "id", title: "Id" },
                { field: "BusinessType", title: "Business Type" },
                { field: "Project", title: "Project" },
                { field: "CorpSponsor", title: "Corp Sponsor" },
                { field: "Tranche", title: "Tranche" },
                { field: "Status", title: "Status" },
                { field: "CCY", title: "CCY" },
                { field: "LocalCCYAmount", title: "Local CCY Amount" }
            ],
            pageable:
            {
                pageSize: 15,
                messages: { display: "{0:#,###0} - {1:#,###0} of {2:#,###0} items" },
                buttonCount: 5
            },
            sortable: true,
            scrollable: false,
            selectable: true,
            reorderable: false,
            rowTemplate: 'ListOfDealsTable-row-template',
            altRowTemplate: 'ListOfDealsTable-row-template',
            useKOTemplates: true
        };

        //self.TeamLinksListTable = {
        //    data: self.teamLinksList,
        //    columns: [
        //        { field: "Title", title: "Title" },
        //        { field: "Url", title: "Url" },
        //        { field: "Category", title: "Category" }
        //    ],
        //    pageable:
        //    {
        //        pageSize: 5,
        //        messages: { display: "{0:#,###0} - {1:#,###0} of {2:#,###0} items" },
        //        buttonCount: 5
        //    },
        //    sortable: false,
        //    scrollable: false,
        //    selectable: true,
        //    reorderable: false,
        //    serverFiltering: false,
        //    rowTemplate: 'TeamLinksListTable-row-template',
        //    altRowTemplate: 'TeamLinksListTable-row-template',
        //    useKOTemplates: true
        //};
    };

    return vm;
});