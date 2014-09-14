define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    vm.title = ko.observable('Modern Browser UI Features');
    vm.gaugeValue = ko.observable(25);
    


    vm.activate = function () {

        

    };

    vm.attached = function () {

        $('.animation_select').click(function () {
            $('#animation_box').removeAttr('class').attr('class', '');
            var animation = $(this).attr("data-animation");
            $('#animation_box').addClass('animated');
            $('#animation_box').addClass(animation);
            return false;
        });

        var graph2 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw_multi"),
            renderer: 'area',
            stroke: true,
            series: [{
                data: [{ x: 0, y: 2 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 4 }, { x: 4, y: 8 }],
                color: '#1ab394',
                stroke: '#17997f'
            }, {
                data: [{ x: 0, y: 13 }, { x: 1, y: 15 }, { x: 2, y: 17 }, { x: 3, y: 12 }, { x: 4, y: 10 }],
                color: '#eeeeee',
                stroke: '#d7d7d7'
            }]
        });
        graph2.renderer.unstack = true;
        graph2.render();

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
        

        
    };

    
    vm.flip = function () {
        $('.card').toggleClass('flip');
    };

   

    return vm;
});