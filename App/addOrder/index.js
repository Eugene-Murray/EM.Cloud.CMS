define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    vm.title = ko.observable('Add Order');
    //vm.investorVisible = ko.observable(true);
    //vm.generalVisible = ko.observable(false);
    //vm.generalAmounts = ko.observable(false);
    vm.investorList = ko.observableArray([]);
    vm.selectedInvestor = ko.observable('');
    vm.TrancheList = ko.observableArray([]);
    
    


    vm.activate = function () {

        //vm.investorVisible(true);
        //vm.generalVisible(false);

        vm.SetupKendoGrids();

        vm.investorList(['IBM', 'Microsoft', 'Apple', 'SAP', 'Oracle', 'Telerik']);

        vm.TrancheList([{ title: "Tranche 1", amount: "", price: "Reoffer" }]);

    };

    vm.attached = function () {

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var x = e.target; // activated tab
            var xx = e.relatedTarget; // previous tab
        });

        $("#contacts").kendoMultiSelect();
    };

    vm.deactivate = function () {
        

        
    };

    
    //vm.toGeneral = function () {
    //    //$("#investor").addClass("animated bounceOutLeft");
    //    vm.investorVisible(false);
    //    vm.generalVisible(true);
    //    //$("#general").addClass("animated bounceInRight");
    //};

    //vm.toInvestor = function () {
    //    vm.investorVisible(true);
    //    vm.generalVisible(false);
    //    //$("#investor").addClass("animated bounceInLeft");
    //    //vm.investorVisible(false);
    //    //vm.generalVisible(true);
    //    //$("#general").addClass("animated bounceInRight");
    //};

    //vm.toAmounts = function () {
    //};

    vm.save = function () {

    };

    vm.onClick_EnterDetailedOrder = function () {

    };

    vm.onClick_AddTranche = function () {
        vm.TrancheList.push({ title: "Tranche -", amount: "", price: "Reoffer" });
    };


    vm.SetupKendoGrids = function () {

        vm.TrancheTable = {
            data: vm.TrancheList,
            columns: [
                { field: "title", title: "Title" },
                { field: "amount", title: "Amount" },
                { field: "price", title: "Price" },
                { field: "", title: "<i class='fa fa-archive'></i>" }
               
            ],
            //pageable:
            //{
            //    pageSize: 5,
            //    messages: { display: "{0:#,###0} - {1:#,###0} of {2:#,###0} items" },
            //    buttonCount: 5
            //},
            sortable: true,
            scrollable: false,
            selectable: true,
            reorderable: false,
            rowTemplate: 'TrancheTable-row-template',
            altRowTemplate: 'TrancheTable-row-template',
            useKOTemplates: true
        };

    };

    return vm;
});