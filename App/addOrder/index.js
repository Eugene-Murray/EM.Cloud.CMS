define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    vm.title = ko.observable('Add Order');
    //vm.investorVisible = ko.observable(true);
    //vm.generalVisible = ko.observable(false);
    //vm.generalAmounts = ko.observable(false);
    vm.investorList = ko.observableArray();
    vm.selectedInvestor = ko.observable('');
    vm.TrancheList = ko.observableArray();
    vm.currentPage = ko.observable(0);
    vm.selectedTranche = ko.observable('');
    


    vm.activate = function () {

        //vm.investorVisible(true);
        //vm.generalVisible(false);

        vm.SetupKendoGrids();
        vm.investorList(['IBM', 'Microsoft', 'Apple', 'SAP', 'Oracle', 'Telerik']);
        vm.TrancheList.push({ id: 1, title: "Tranche 1", amount: "", price: "Reoffer" });

    };

    vm.attached = function () {

        $("#contacts").kendoMultiSelect();
        //$(".sales-person").kendoMultiSelect();
        //$(".zone").kendoMultiSelect();
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

    vm.onClick_SelectedTranche = function () {
        vm.selectedTranche(this);

        $('#tranche-carousel').carousel(this.id - 1);
    };

    vm.onClick_AddTranche = function () {
        var id = vm.TrancheList().length + 1;

        vm.TrancheList.push({ id: id, title: "Tranche " + id, amount: "", price: "Reoffer" });

        vm.currentPage((vm.TrancheList().length - 1));

        
    };


    vm.SetupKendoGrids = function () {

        vm.TrancheTable = {
            data: vm.TrancheList,
            columns: [
                { field: "title", title: "Title" },
                { field: "amount", title: "Amount" },
                { field: "price", title: "Price" }
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