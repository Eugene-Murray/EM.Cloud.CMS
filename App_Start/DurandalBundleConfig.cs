using System;
using System.Web.Optimization;

namespace CMS
{
   public class DurandalBundleConfig
   {
      public static void RegisterBundles(BundleCollection bundles)
      {
         bundles.IgnoreList.Clear();
         AddDefaultIgnorePatterns(bundles.IgnoreList);

         bundles.Add(
          new ScriptBundle("~/Scripts/vendor")
             .Include("~/Scripts/jquery-{version}.js")
             .Include("~/Scripts/bootstrap.js")
             
             //.Include("~/Scripts/kendo/kendo.web.js")
             .Include("~/Scripts/knockout-{version}.js")
             
             .Include("~/Scripts/KO-External-Temp-Engine/infuser.js")
             .Include("~/Scripts/KO-External-Temp-Engine/trafficcop.js")
             .Include("~/Scripts/KO-External-Temp-Engine/koexternaltemplateengine.js")
             .Include("~/Scripts/toastr.js")
             .Include("~/Scripts/underscore.js")
             .Include("~/Scripts/kendo/kendo.all.js")
             .Include("~/Scripts/knockout-kendo.js")
          );

         bundles.Add(
           new StyleBundle("~/Content/css")
             .Include("~/Content/ie10mobile.css")
             //.Include("~/Content/bootstrap.css")
             //.Include("~/Content/bootstrap-theme.min.css")
             .Include("~/Content/font-awesome.min.css")

             .Include("~/Content/bootstrap-branded.css")
			 .Include("~/Content/bootstrap-custom.css")
             .Include("~/Content/animate.css")
             .Include("~/Content/toastr.css")
             .Include("~/Content/durandal.css")

             .Include("~/Content/app.css")

         
             //.Include("~/content/kendo/kendo.common.min.css")
             ////.Include("~/content/kendo/kendo.common.core.min.css")
             ////.Include("~/Content/kendo/kendo.blueopal.min.css")

             //.Include("~/content/kendo/kendo.common-bootstrap.min.css")
             //.Include("~/content/kendo/kendo.bootstrap.min.css")
             //.Include("~/content/kendo/kendo.dataviz.bootstrap.min.css")
            
            .Include("~/Content/kendo/kendo.common.min.css")
			.Include("~/Content/kendo/kendo.rtl.min.css")
			.Include("~/Content/kendo/kendo.bootstrap.min.css")
			.Include("~/Content/kendo/kendo.bootstrap-theme.css")
            .Include("~/Content/kendo/kendo.custom.css")

            .Include("~/Content/kendo/kendo.dataviz.min.css")
            .Include("~/Content/kendo/kendo.dataviz.blueopal.min.css")
             
           );
      }

      public static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
      {
         if (ignoreList == null)
         {
            throw new ArgumentNullException("ignoreList");
         }

         ignoreList.Ignore("*.intellisense.js");
         ignoreList.Ignore("*-vsdoc.js");
         ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
         //ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
         //ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
      }
   }
}