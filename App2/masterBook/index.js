define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    vm.title = ko.observable('Master Book');
    vm.investorVisible = ko.observable(true);
    vm.generalVisible = ko.observable(false);
    vm.generalAmounts = ko.observable(false);
    vm.items = [];
    vm.listOfDeals = ko.observableArray([]);
    

    vm.OutstandingTasksList = ko.observableArray([]);
    vm.LatestBookUpdatesList = ko.observableArray([]);



    vm.activate = function () {

       

        vm.investorVisible(true);
        vm.generalVisible(false);

        vm.SetupKendoGrids();

        vm.items = [{ name: 'one', value: 10 },
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
            { name: 'three', value: 30 }];

        vm.listOfDeals([
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
         { id: 20, BusinessType: "Business Type", Project: "Project", CorpSponsor: "Corp Sponsor", Tranche: "Tranche", Status: "Status", CCY: "CCY", LocalCCYAmount: "LocalCCYAmount", Amt: "Amt", Facility: "Facility 20", Indent: "Indent", Seniority: "Seniority", EcoPercent: "EcoPercent", ExpAmount: "ExpAmount", AmountSyndicate: "AmountSyndicate", ExpPostSyndicate: "ExpPostSyndicate", ProFormaEco: "ProFormaEco", ProFormaAmount: "ProFormaAmount", Value: "Value", BridgeLimit: "BridgeLimit", SponsorLimit: "SponsorLimit" }

        ]);

        


        vm.OutstandingTasksList([
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number ', Done: true },
           { OpenTask: 'This is an open task number three', Done: true },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: true },
           { OpenTask: 'This is an open task number three', Done: true },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: true },
           { OpenTask: 'This is an open task number three', Done: true },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: true },
           { OpenTask: 'This is an open task number three', Done: true },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number ', Done: true },
           { OpenTask: 'This is an open task number three', Done: true },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: true },
           { OpenTask: 'This is an open task number three', Done: true },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: true },
           { OpenTask: 'This is an open task number three', Done: true },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: false },
           { OpenTask: 'This is an open task number three', Done: false },
           { OpenTask: 'This is an open task number one', Done: true },
           { OpenTask: 'This is an open task number two', Done: true },
           { OpenTask: 'This is an open task number three', Done: true }
        ]);

        vm.LatestBookUpdatesList([
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' },
           { Update: 'Latest Book Updates', Time: '16:50' }

        ]);


    };

    vm.attached = function () {

        $('.pie-chart-tiny').easyPieChart({
            easing: 'easeOutBounce',
            barColor: 'rgba(255,255,255,0.75)',
            trackColor: 'rgba(0,0,0,0.3)',
            scaleColor: 'rgba(255,255,255,0.3)',
            lineCap: 'square',
            lineWidth: 4,
            size: 100,
            animate: 3000,
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

        var chart = window.chart = $('.pie-chart-tiny').data('easyPieChart');
        $('.pie-chart-tiny .pie-title > i').on('click', function () {
            $(this).closest('.pie-chart-tiny').data('easyPieChart').update(Math.random() * 200 - 100);
        });

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var x = e.target; // activated tab
            var xx = e.relatedTarget; // previous tab
        })

        $("#barChart").kendoChart({
            title: {
                text: "Site Visitors Stats \n /thousands/"
            },
            legend: {
                visible: false
            },
            seriesDefaults: {
                type: "bar"
            },
            series: [{
                name: "Total Visits",
                data: [56000, 63000, 74000, 91000, 117000, 138000]
            }, {
                name: "Unique visitors",
                data: [52000, 34000, 23000, 48000, 67000, 83000]
            }],
            valueAxis: {
                max: 140000,
                line: {
                    visible: false
                },
                minorGridLines: {
                    visible: true
                }
            },
            categoryAxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                majorGridLines: {
                    visible: false
                }
            },
            tooltip: {
                visible: true,
                template: "#= series.name #: #= value #"
            }
        });


        $("#pieChart").kendoChart({
            //title: {
            //    position: "bottom",
            //    text: "Share of Internet Population Growth, 2007 - 2012"
            //},
            legend: {
                visible: false
            },
            chartArea: {
                background: ""
            },
            seriesDefaults: {
                labels: {
                    visible: true,
                    background: "transparent",
                    template: "#= category #: \n #= value#%"
                }
            },
            series: [{
                type: "pie",
                startAngle: 150,
                data: [{
                    category: "Asia",
                    value: 53.8,
                    color: "#9de219"
                }, {
                    category: "Europe",
                    value: 16.1,
                    color: "#90cc38"
                }, {
                    category: "Latin America",
                    value: 11.3,
                    color: "#068c35"
                }, {
                    category: "Africa",
                    value: 9.6,
                    color: "#006634"
                }, {
                    category: "Middle East",
                    value: 5.2,
                    color: "#004d38"
                }, {
                    category: "North America",
                    value: 3.6,
                    color: "#033939"
                }]
            }],
            tooltip: {
                visible: true,
                format: "{0}%"
            }
        });

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

        var barChart = $('#barChart').data("kendoChart");
        barChart.destroy();

        var pieChart = $('#pieChart').data("kendoChart");
        pieChart.destroy();

        var lineChart = $('#lineChart').data("kendoChart");
        lineChart.destroy();
    };


    vm.toGeneral = function () {
        //$("#investor").addClass("animated bounceOutLeft");
        vm.investorVisible(false);
        vm.generalVisible(true);
        //$("#general").addClass("animated bounceInRight");
    };

    vm.toInvestor = function () {
        vm.investorVisible(true);
        vm.generalVisible(false);
        //$("#investor").addClass("animated bounceInLeft");
        //vm.investorVisible(false);
        //vm.generalVisible(true);
        //$("#general").addClass("animated bounceInRight");
    };

    vm.toAmounts = function () {
    };

    vm.save = function () {

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
                { field: "SponsorLimit", title: "Sponsor Limit" }
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

        vm.OutstandingTasksTable = {
            data: vm.OutstandingTasksList,
            columns: [
                { field: "OpenTask", title: "Open Task" },
                { field: "Done", title: "Done" }
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
            rowTemplate: 'OutstandingTasksTable-row-template',
            altRowTemplate: 'OutstandingTasksTable-row-template',
            useKOTemplates: true
        };



        vm.LatestBookUpdatesTable = {
            data: vm.LatestBookUpdatesList,
            columns: [
                { field: "Update", title: "Update" },
                { field: "Time", title: "Time" }
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
            rowTemplate: 'LatestBookUpdatesTable-row-template',
            altRowTemplate: 'LatestBookUpdatesTable-row-template',
            useKOTemplates: true
        };
    };


    return vm;
});