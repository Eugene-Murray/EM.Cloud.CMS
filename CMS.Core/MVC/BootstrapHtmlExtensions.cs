//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Linq.Expressions;
//using System.Text.RegularExpressions;
//using System.Web;
//using System.Web.Mvc;
//using System.Web.Mvc.Html;

//namespace CMS.Core.MVC
//{
//    public static class BootstrapHtmlExtensions
//    {
//        private const string SpanKey = "SpanHtmlPropertiesAttribute";
//        private const string LabelKey = "LabelHtmlPropertiesAttribute";
//        private const string AbbrKey = "AbbrHtmlPropertiesAttribute";
//        private const string InputKey = "InputHtmlPropertiesAttribute";

//        private static readonly IDictionary<string, object> DefaultSpanAttributes = new Dictionary<string, object>
//        {
//            { "class", "col-md-{0} form-group" }
//        };

//        private static readonly IDictionary<string, object> DefaultLabelAttributes = new Dictionary<string, object>
//        {
//            { "class", "control-label" }
//        };

//        private static readonly IDictionary<string, object> DefaultAbbrAttributes = new Dictionary<string, object>
//        {
//            { "title", "The {0} field is required" }
//        };

//        private static readonly IDictionary<string, object> DefaultInputAttributes = new Dictionary<string, object>
//        {
//            { "id", "" },
//            { "class", "form-control" }
//        };

//        private static readonly IDictionary<string, object> DefaultSelect2Attributes = new Dictionary<string, object>
//        {
//            { "id", "" }
//        };

//        private static readonly IDictionary<string, object> DefaultDatePickerAttributes = new Dictionary<string, object>
//        {
//            { "id", "" },
//            { "class", "" }
//        };

//        public static IHtmlString SpanDateBoxFor<TModel, TProperty>(this HtmlHelper<TModel> helper, int span,
//                                                                       Expression<Func<TModel, TProperty>> expression,
//                                                                       IDictionary<string, object> spanAttributes = null,
//                                                                       IDictionary<string, object> inputAttributes = null,
//                                                                       IDictionary<string, object> labelAttributes = null,
//                                                                       IDictionary<string, object> abbrAttributes = null)
//        {
//            return helper.SpanInputFor(span, expression, spanAttributes, inputAttributes, labelAttributes, abbrAttributes, "DatePicker");
//        }

//        public static IHtmlString SpanDropDownListFor<TModel, TProperty>(this HtmlHelper<TModel> helper, int span,
//                                                                       Expression<Func<TModel, TProperty>> expression,
//                                                                       IDictionary<string, object> spanAttributes = null,
//                                                                       IDictionary<string, object> inputAttributes = null,
//                                                                       IDictionary<string, object> labelAttributes = null,
//                                                                       IDictionary<string, object> abbrAttributes = null)
//        {
//            return helper.SpanInputFor(span, expression, spanAttributes, inputAttributes, labelAttributes, abbrAttributes, "DropDownList");
//        }

//        public static IHtmlString SpanMultiSelectDropDownListFor<TModel, TProperty>(this HtmlHelper<TModel> helper, int span,
//                                                                       Expression<Func<TModel, TProperty>> expression,
//                                                                       IDictionary<string, object> spanAttributes = null,
//                                                                       IDictionary<string, object> inputAttributes = null,
//                                                                       IDictionary<string, object> labelAttributes = null,
//                                                                       IDictionary<string, object> abbrAttributes = null)
//        {
//            return helper.SpanInputFor(span, expression, spanAttributes, inputAttributes, labelAttributes, abbrAttributes, "ListBox");
//        }

//        public static IHtmlString SpanTextBoxFor<TModel, TProperty>(this HtmlHelper<TModel> helper, int span,
//                                                                       Expression<Func<TModel, TProperty>> expression,
//                                                                       IDictionary<string, object> spanAttributes = null,
//                                                                       IDictionary<string, object> inputAttributes = null,
//                                                                       IDictionary<string, object> labelAttributes = null,
//                                                                       IDictionary<string, object> abbrAttributes = null)
//        {
//            return helper.SpanInputFor(span, expression, spanAttributes, inputAttributes, labelAttributes, abbrAttributes, "TextBox");
//        }

//        public static IHtmlString SpanTextAreaFor<TModel, TProperty>(this HtmlHelper<TModel> helper, int span,
//                                                                       Expression<Func<TModel, TProperty>> expression,
//                                                                       IDictionary<string, object> spanAttributes = null,
//                                                                       IDictionary<string, object> inputAttributes = null,
//                                                                       IDictionary<string, object> labelAttributes = null,
//                                                                       IDictionary<string, object> abbrAttributes = null)
//        {
//            return helper.SpanInputFor(span, expression, spanAttributes, inputAttributes, labelAttributes, abbrAttributes, "TextArea");
//        }


//        public static IHtmlString SpanInputFor<TModel, TProperty>(this HtmlHelper<TModel> helper, int span,
//                                                                    Expression<Func<TModel, TProperty>> expression,
//                                                                    IDictionary<string, object> spanAttributes = null,
//                                                                    IDictionary<string, object> inputAttributes = null,
//                                                                    IDictionary<string, object> labelAttributes = null,
//                                                                    IDictionary<string, object> abbrAttributes = null,
//                                                                    string inputType = null)
//        {
//            if (span < 1 || span > 12)
//                throw new ArgumentOutOfRangeException("span", "Bootstrap span must be between 1 and 12");

//            var attributes = default(IDictionary<string, object>);
//            var additionals = default(IDictionary<string, object>);

//            var metadata = ModelMetadata.FromLambdaExpression(expression, helper.ViewData);

//            var abbr = string.Empty;

//            if (metadata.IsRequired)
//            {
//                additionals = metadata.AdditionalValues.ContainsKey(BootstrapHtmlExtensions.AbbrKey)
//                    ? (IDictionary<string, object>)metadata.AdditionalValues[BootstrapHtmlExtensions.AbbrKey]
//                    : null;

//                attributes = BootstrapHtmlExtensions.MergeAttributes(BootstrapHtmlExtensions.DefaultAbbrAttributes,
//                                                                     additionals,
//                                                                     abbrAttributes);

//                if (attributes["title"].ToString().IndexOf("{0}", StringComparison.CurrentCulture) > 0)
//                {
//                    attributes["title"] = string.Format(attributes["title"].ToString(), metadata.DisplayName ?? metadata.PropertyName);
//                }

//                abbr = string.Format(@"<abbr {0}>*</abbr>",
//                                     attributes.Aggregate(string.Empty, (a, b) =>
//                                                          string.Concat(a, string.Format(@"{0}=""{1}""", b.Key, b.Value))));
//            }

//            additionals = metadata.AdditionalValues.ContainsKey(BootstrapHtmlExtensions.LabelKey)
//                ? (IDictionary<string, object>)metadata.AdditionalValues[BootstrapHtmlExtensions.LabelKey]
//                : null;

//            attributes = BootstrapHtmlExtensions.MergeAttributes(BootstrapHtmlExtensions.DefaultLabelAttributes,
//                                                                 additionals,
//                                                                 labelAttributes);

//            var label = string.Format(@"<label {0}>{1} {2}</label>",
//                                      attributes.Aggregate(string.Empty, (a, b) =>
//                                                           string.Concat(a, string.Format(@"{0}=""{1}""", b.Key, b.Value))),
//                                      helper.DisplayNameFor(expression),
//                                      abbr);

//            additionals = metadata.AdditionalValues.ContainsKey(BootstrapHtmlExtensions.InputKey)
//                ? (IDictionary<string, object>)metadata.AdditionalValues[BootstrapHtmlExtensions.InputKey]
//                : null;

//            attributes = BootstrapHtmlExtensions.MergeAttributes(BootstrapHtmlExtensions.DefaultInputAttributes,
//                                                                 additionals,
//                                                                 inputAttributes);

//            var input = default(MvcHtmlString);
			
//            switch (inputType)
//            {
//                case "DatePicker":
//                    attributes = BootstrapHtmlExtensions.MergeAttributes(BootstrapHtmlExtensions.DefaultDatePickerAttributes,
//                                                                         additionals,
//                                                                         inputAttributes);

//                    input = helper.TextBoxFor(expression, default(string), attributes);
//                    break;
//                case "DropDownList":
//                    attributes = BootstrapHtmlExtensions.MergeAttributes(BootstrapHtmlExtensions.DefaultSelect2Attributes,
//                                                                         additionals,
//                                                                         inputAttributes);

//                    input = helper.TextBoxFor(expression, default(string), attributes);
//                    break;
//                case "ListBox":
//                    input = helper.ListBoxFor(expression, new List<SelectListItem>(), attributes);
//                    break;
//                case "TextArea":
//                    input = helper.TextAreaFor(expression,attributes);
//                    break;
//                default:
//                    input = helper.TextBoxFor(expression, default(string), attributes);
//                    break;
//            }

//            additionals = metadata.AdditionalValues.ContainsKey(BootstrapHtmlExtensions.SpanKey)
//                ? (IDictionary<string, object>)metadata.AdditionalValues[BootstrapHtmlExtensions.SpanKey]
//                : null;

//            attributes = BootstrapHtmlExtensions.MergeAttributes(BootstrapHtmlExtensions.DefaultSpanAttributes,
//                                                                 additionals,
//                                                                 spanAttributes);

//            attributes["class"] = Regex.Replace(attributes["class"].ToString(), @"col\-md\-([{]\d*[}]|\d*)", string.Format("col-md-{0}", span));

//            return helper.Raw(string.Format(@"<div {0}>{1}{2}</div>",
//                attributes.Aggregate(string.Empty, (a, b) => string.Concat(a, string.Format(@"{0}=""{1}""", b.Key, b.Value))),
//                label, input));
//        }

//        private static IDictionary<string, object> MergeAttributes(IDictionary<string, object> defaultAttributes,
//                                                                   IDictionary<string, object> modelAttributes,
//                                                                   IDictionary<string, object> newAttributes)
//        {
//            var mergedAttributes = (from kvp in defaultAttributes
//                                    select kvp).ToDictionary(kvp => kvp.Key, kvp => kvp.Value);

//            foreach (var kvp in from attributeCollection in new[] { modelAttributes, newAttributes }
//                                where attributeCollection != null
//                                from kvp in attributeCollection
//                                select kvp)
//            {
//                if (kvp.Value == null)
//                    continue;
//                if (kvp.Value is bool && !(bool)kvp.Value)
//                    continue;

//                var key = kvp.Key.TrimStart('@').Replace('_', '-');

//                if (mergedAttributes.ContainsKey(key))
//                    mergedAttributes[key] = kvp.Value;
//                else
//                    mergedAttributes.Add(key, kvp.Value);
//            }

//            return mergedAttributes;
//        }
//    }
//}