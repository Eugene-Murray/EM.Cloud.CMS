define(['durandal/system', 'knockout'], function (system, ko) {

    

    var vm = {};
    vm.title = ko.observable('Widget 1');

    vm.attached = function () {
       

        $("#lineChart").kendoChart({
            //title: {
            //    text: "Gross domestic product growth \n /GDP annual %/"
            //},
            legend: {
                position: "bottom"
            },
            chartArea: {
                background: ""
            },
            seriesDefaults: {
                type: "line",
                style: "smooth"
            },
            series: [{
                name: "India",
                data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
            }, {
                name: "World",
                data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
            }, {
                name: "Russian Federation",
                data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
            }, {
                name: "Haiti",
                data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
            }],
            valueAxis: {
                labels: {
                    format: "{0}%"
                },
                line: {
                    visible: false
                },
                axisCrossingValue: -10
            },
            categoryAxis: {
                categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
                majorGridLines: {
                    visible: false
                }
            },
            tooltip: {
                visible: true,
                format: "{0}%",
                template: "#= series.name #: #= value #"
            }
        });
    };

    vm.deactivate = function () {
        var x = 'x';

        var lineChart = $('#lineChart').data("kendoChart");
        lineChart.destroy();
    };

    return vm;
    //vm.items = ko.observableArray([{ name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 }]);
    
    //vm.activate = function () {
    //    vm.items([{ name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 },
    //    { name: 'one', value: 10 },
    //    { name: 'two', value: 20 },
    //    { name: 'three', value: 30 }]);
    //};



    //return vm;

    //var viewModel = function () {
    //    var self = this;

    //    self.activate = function () {

    //        self.items([{ name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 }]);

    //        self.SetupKendoGrids();
    //    };

    //    self.attached = function () {

    //        var x = 'x';

    //        //self.items([{ name: 'one', value: 10 },
    //        //       { name: 'two', value: 20 },
    //        //       { name: 'three', value: 30 },
    //        //       { name: 'one', value: 10 },
    //        //       { name: 'two', value: 20 },
    //        //       { name: 'three', value: 30 },
    //        //       { name: 'one', value: 10 },
    //        //       { name: 'two', value: 20 },
    //        //       { name: 'three', value: 30 },
    //        //       { name: 'one', value: 10 },
    //        //       { name: 'two', value: 20 },
    //        //       { name: 'three', value: 30 },
    //        //       { name: 'one', value: 10 },
    //        //       { name: 'two', value: 20 },
    //        //       { name: 'three', value: 30 }]);
    //    };

    //    self.detached = function () {
    //        var x = 'x';
    //    };


    //    self.title = ko.observable('Widget 1');
    //    self.items = ko.observableArray([{ name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 },
    //               { name: 'one', value: 10 },
    //               { name: 'two', value: 20 },
    //               { name: 'three', value: 30 }]);
    //    self.listOfDeals = ko.observableArray([
    //    { id: 1, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 1", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 2, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 2", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 3, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 3", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 4, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 4", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 5, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 5", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 6, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 6", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 7, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 7", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 8, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 8", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 9, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 9", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 10, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 10", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 11, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 11", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 12, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 12", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 13, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 13", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 14, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 14", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 15, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 15", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 16, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 16", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 17, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 17", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 18, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 18", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 19, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 19", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" },
    //    { id: 20, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 20", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" }

    //    ]);

    //    self.SetupKendoGrids = function () {

    //        self.ListOfDealsTable = {
    //            data: self.listOfDeals,
    //            columns: [
    //                { field: "id", title: "Id" },
    //                { field: "BusinessType", title: "Business Type" },
    //                { field: "Project", title: "Project" },
    //                { field: "CorpSponsor", title: "Corp Sponsor" },
    //                { field: "Tranche", title: "Tranche" },
    //                { field: "Status", title: "Status" },
    //                { field: "CCY", title: "CCY" },
    //                { field: "LocalCCYAmount", title: "Local CCY Amount" }
    //            ],
    //            pageable:
    //            {
    //                pageSize: 15,
    //                messages: { display: "{0:#,###0} - {1:#,###0} of {2:#,###0} items" },
    //                buttonCount: 5
    //            },
    //            sortable: true,
    //            scrollable: false,
    //            selectable: true,
    //            reorderable: false,
    //            rowTemplate: 'ListOfDealsTable-row-template',
    //            altRowTemplate: 'ListOfDealsTable-row-template',
    //            useKOTemplates: true
    //        };

            
    //    };

    //};

    

    return viewModel;
    
});