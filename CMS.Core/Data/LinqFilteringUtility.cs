//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using CMS.Core.MVC;

//namespace CMS.Core.Data
//{
//    public static class LinqFilteringUtility
//    {
//        public static IEnumerable<T> MultipleFilter<T>(this IEnumerable<T> data,
//          List<GridFilter> filterExpressions)
//        {
//            if ((filterExpressions == null) || (filterExpressions.Count <= 0))
//            {
//                return data;
//            }

//            IEnumerable<T> filteredquery = from item in data select item;

//            for (int i = 0; i < filterExpressions.Count; i++)
//            {
//                var index = i;

//                Func<T, bool> expression = item =>
//                {
//                    var filter = filterExpressions[index];
//                    var itemValue = item.GetType()
//                        .GetProperty(filter.Field)
//                        .GetValue(item, null)
//                        .ToString()
//                        .ToUpper();

//                    if (itemValue == null)
//                    {
//                        return false;
//                    }

//                    var value = filter.Value.ToUpper();
//                    switch (filter.Operator)
//                    {
//                        case "eq":
//                            return itemValue == value;
//                        case "startswith":
//                            return itemValue.StartsWith(value);
//                        case "contains":
//                            return itemValue.Contains(value);
//                        case "endswith":
//                            return itemValue.EndsWith(value);
//                    }

//                    return true;
//                };

//                filteredquery = filteredquery.Where(expression);
//            }

//            return filteredquery;
//        }
//    }
//}
