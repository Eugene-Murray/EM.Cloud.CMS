//using System;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http.Controllers;
//using System.Web.Http.Filters;

//namespace CMS.Core.HTTP
//{
//     [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = false)]
//    public class HttpModelStateFilter : ActionFilterAttribute
//    {
//         public override void OnActionExecuting(HttpActionContext filterContext)
//         {
//             var modelState = filterContext.ModelState;

//             if (modelState != null && !modelState.IsValid)
//             {
//                 // TODO: Exclude errors without an error message
//                 var modelErrors = modelState.AsEnumerable().ToDictionary(kvp => kvp.Key,
//                                                           kvp => kvp.Value.Errors
//                                                                     .Select(error => !String.IsNullOrEmpty(error.ErrorMessage) ? error.ErrorMessage : error.Exception.Message)
//                                                                     .ToArray());
                 
//                 filterContext.Response = filterContext.Request.CreateResponse<object>(HttpStatusCode.BadRequest, new
//                 {
//                     Error = modelErrors,
//                 });
//             }
//         }
//    }
//}
