define(['durandal/system', 'knockout'], function (system, ko) {

    var vm = {};
    
    
    


    vm.activate = function () {

       

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
        
    };

    vm.deactivate = function () { 
    };


    return vm;
});