/// Currently can have up to 8 custom page sections

define(['durandal/system', 'knockout', 'services/templatesService'], function (system, ko, templatesService) {

    var self = {};
    self.widgetPath = 'widgets/';
    self.pageStructureTemplatePath = 'pageStructureTemplates/';

    self.pageStrctureTemplate = ko.observable(self.pageStructureTemplatePath + '2Section-PageStructureTemplate.html');
    self.section1 = ko.observable(self.widgetPath + 'widget1');
    self.section2 = ko.observable(self.widgetPath + 'widget2');
    self.section3 = ko.observable(self.widgetPath + 'widget3');
    self.section4 = ko.observable(self.widgetPath + 'widget4');
    self.section5 = ko.observable(self.widgetPath + 'widget5');
    self.section6 = ko.observable(self.widgetPath + 'widget6');
    self.section7 = ko.observable(self.widgetPath + 'widget7');
    self.section8 = ko.observable(self.widgetPath + 'widget8');
    self.section9 = ko.observable(self.widgetPath + 'widget9');
    self.section10 = ko.observable(self.widgetPath + 'widget10');
    self.showSection1 = ko.observable(true);
    self.showSection2 = ko.observable(true);
    self.showSection3 = ko.observable(true);
    self.showSection4 = ko.observable(true);
    self.showSection5 = ko.observable(true);
    self.showSection6 = ko.observable(true);
    self.showSection7 = ko.observable(true);
    self.showSection8 = ko.observable(true);
    self.showSection9 = ko.observable(true);
    self.showSection10 = ko.observable(true);




    //self.pageStrctureTemplate = ko.observable();
    //self.templateSection1 = ko.observable();
    //self.templateSection2 = ko.observable();
    //self.templateSection3 = ko.observable();
    //self.templateSection4 = ko.observable();
    //self.templateSection5 = ko.observable();
    //self.templateSection6 = ko.observable();
    //self.templateSection7 = ko.observable();
    //self.templateSection8 = ko.observable();
    //self.showSection1 = ko.observable(true);
    //self.showSection2 = ko.observable(true);
    //self.showSection3 = ko.observable(true);
    //self.showSection4 = ko.observable(true);
    //self.showSection5 = ko.observable(true);
    //self.showSection6 = ko.observable(true);
    //self.showSection7 = ko.observable(true);
    //self.showSection8 = ko.observable(true);
    //self.domFunctionSection1 = ko.observable();
    //self.domFunctionSection2 = ko.observable();
    //self.domFunctionSection3 = ko.observable();
    //self.domFunctionSection4 = ko.observable();
    //self.domFunctionSection5 = ko.observable();
    //self.domFunctionSection6 = ko.observable();
    //self.domFunctionSection7 = ko.observable();
    //self.domFunctionSection8 = ko.observable();
    //self.isHomePage = true;


    //self.InitilizeBase = function (pageTitle) {
    //    if (pageTitle !== 'Home')
    //        self.isHomePage = false;

    //    self.SetPageStructureAndSectionTemplates(pageTitle);
    //};

    //self.SetPageStructureAndSectionTemplates = function (pageTitle) {
    //    //var ajaxConfig = { Url: "/Templates/GetPageTemplates?templatedPageTitle=" + templatedPageTitle, VerbType: "GET" };

    //    //var response = ConsoleApp.AjaxHelper(ajaxConfig);

    //    var response = templatesService.GetPageStructureAndSectionTemplates(pageTitle);

    //    response.success(function (pageTemplatesDto) {
    //        if (pageTemplatesDto.PageStructureTemplateUrl)
    //            self.pageTemplate(pageTemplatesDto.PageStructureTemplateUrl);
    //        else
    //            self.pageTemplate("/Templates/_8SectionTemplate");

    //        if (pageTemplatesDto.SectionTemplates) {

    //            $.each(pageTemplatesDto.SectionTemplates, function (index, sectionTemplate) {
    //                var pageSectionId;
    //                if (sectionTemplate.PageSectionId)
    //                    pageSectionId = sectionTemplate.PageSectionId;
    //                else
    //                    toastr.error("PageSectionId not set");


    //                if (pageSectionId === 0)
    //                    toastr.error("PageSectionId should not be 0 - 0 is for PageStructureTemplates");

    //                self.setSection(sectionTemplate, pageSectionId, index);
    //            });

    //        }
    //    });

    //};

    //self.SetSection = function (sectionTemplate, pageSectionId) {
    //    if (sectionTemplate && sectionTemplate.TemplateUrl != undefined)
    //        self['templateSection' + pageSectionId](sectionTemplate.TemplateUrl !== "holding-template" ? sectionTemplate.TemplateUrl + "?guid=" + $.generateGuid() : "holding-template");
    //    else
    //        self['templateSection' + pageSectionId]("holding-template");

    //    if (sectionTemplate && sectionTemplate.IsVisible != undefined)
    //        self['showSection' + pageSectionId](sectionTemplate.IsVisible);

    //    if (sectionTemplate && sectionTemplate.TemplateAfterRenderDomFunction != undefined)
    //        self['domFunctionSection' + pageSectionId](sectionTemplate.TemplateAfterRenderDomFunction);
    //};

    //self.AfterRenderSection1_DomFunction = function (elements) {
    //    if (self.domFunctionSection1()) {
    //        var domFunction = self.domFunctionSection1().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    //self.AfterRenderSection2_DomFunction = function (elements) {
    //    if (self.domFunctionSection2()) {
    //        var domFunction = self.domFunctionSection2().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    //self.AfterRenderSection3_DomFunction = function (elements) {
    //    if (self.domFunctionSection3()) {
    //        var domFunction = self.domFunctionSection3().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    //self.AfterRenderSection4_DomFunction = function (elements) {
    //    if (self.domFunctionSection4()) {
    //        var domFunction = self.domFunctionSection4().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    //self.AfterRenderSection5_DomFunction = function (elements) {
    //    if (self.domFunctionSection5()) {
    //        var domFunction = self.domFunctionSection5().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    //self.AfterRenderSection6_DomFunction = function (elements) {
    //    if (self.domFunctionSection6()) {
    //        var domFunction = self.domFunctionSection6().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    //self.AfterRenderSection7_DomFunction = function (elements) {
    //    if (self.domFunctionSection7()) {
    //        var domFunction = self.domFunctionSection7().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    //self.AfterRenderSection8_DomFunction = function (elements) {
    //    if (self.domFunctionSection8()) {
    //        var domFunction = self.domFunctionSection8().replace('()', '');
    //        window[domFunction](self.isHomePageTab);
    //    }
    //};

    return self;
});