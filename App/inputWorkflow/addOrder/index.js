define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    vm.title = ko.observable('Add Order');
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
    vm.items = ko.observableArray([
       { name: 'one', value: 10 },
       { name: 'two', value: 20 },
       { name: 'three', value: 30 },
       { name: 'one', value: 10 },
       { name: 'two', value: 25 },
       { name: 'three', value: 40 },
    ]);


    vm.activate = function () {
        vm.SetupKendoGrids();
        
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

    vm.attached = function () {
        
    };

    vm.investorVisible = ko.observable(true);
    vm.generalVisible = ko.observable(false);
    vm.inputNext = function () {
        //vm.visible(true);
        
        $("#investor").addClass("animated bounceOutLeft");
        vm.investorVisible(false);
        vm.generalVisible(true);
        $("#general").addClass("animated bounceOutLeft");
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
                { field: "LocalCCYAmount", title: "LocalCCYAmount" },
                { field: "Amt", title: "Amt" },
                { field: "Facility", title: "Facility" },
                { field: "Indent", title: "Indent" },
                { field: "Seniority", title: "Seniority" },
                { field: "EcoPercent", title: "EcoPercent" },
                { field: "ExpAmount", title: "ExpAmount" },
                { field: "AmountSyndicate", title: "AmountSyndicate" },
                { field: "ExpPostSyndicate", title: "ExpPostSyndicate" },
                { field: "ProFormaEco", title: "ProFormaEco" },
                { field: "ProFormaAmount", title: "ProFormaAmount" },
                { field: "Value", title: "Value" },
                { field: "BridgeLimit", title: "Bridge Limit" },
                { field: "SponsorLimit", title: "Sponsor Limit" },
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


    };
    

    return vm;
});