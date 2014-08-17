//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Web;
//using System.Web.Mvc;
//using System.Web.Routing;
//using Validus.Core.LogHandling;

//namespace CMS.Core.MVC
//{
//    // Currently not used...
//    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
//    public class MvcAuthorizeFilter : AuthorizeAttribute
//    {
//        public override void OnAuthorization(AuthorizationContext filterContext)
//        {
//            base.OnAuthorization(filterContext);

//            if (!filterContext.HttpContext.User.Identity.IsAuthenticated)
//            {
//                HandleUnauthorizedRequest(filterContext);
//            }
//        }

//        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
//        {
//            filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Error", action = "Index" }));
//            filterContext.Result.ExecuteResult(filterContext.Controller.ControllerContext);
//        }
//    }
//}
