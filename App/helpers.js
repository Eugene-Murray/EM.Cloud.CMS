
function baseKendoDataSource(options) {
    var data = new kendo.data.DataSource(
		{
		    read: {
		        cache: false
		    },
		    transport: options.transport ||
			{
			    read:
				{
				    url: options.url
				}
			},
		    requestStart: function (data) {
		        if (options.requestStart)
		            options.requestStart(data);
		    },
		    requestEnd: function (data) {
		        if (options.requestEnd)
		            options.requestEnd(data);
		    },
		    type: "json",
		    pageSize: options.pageSize || 10,
		    serverPaging: options.serverPaging || true,
		    serverSorting: options.serverSorting || true,
		    schema: options.schema || {
		        data: "results",
		        total: "total"
		    },
		    change: function (data) {
		        if (options.onSuccess)
		            options.onSuccess(data);
		    },
		    error: options.error || function (xhr, error) {
		        console.log(xhr);
		        console.log(error);
		    },
		    sort: options.sort,
		    serverFiltering: options.serverFiltering || false
		});

    if (options.parameterMap)
        data.transport.parameterMap = options.parameterMap;

    return data;
}

function KendoDataSource(url, options) {
    var settings = $.extend({}, {
        read: {
            cache: false
        },
        transport: {
            read: {
                url: url
            }
        },
        type: "json",
        pageSize: 5,
        serverPaging: true,
        serverSorting: true,
        schema: {
            data: "results",
            total: "total"
        }
    }, options);

    if (options.parameterMap)
        settings.transport.parameterMap = options.parameterMap;

    return new kendo.data.DataSource(settings);
}

function KendoGrid(data, columns, template, options) {
    var settings = $.extend({}, {
        data: data,
        columns: columns,
        pageable: {
            messages: { display: "{0:#,###0} - {1:#,###0} of {2:#,###0} items" },
            pageSize: 5,
            buttonCount: 5
        },
        sortable: true,
        useKOTemplates: !!template,
        rowTemplate: template,
        altRowTemplate: template
    }, options || {});

    return settings;
}