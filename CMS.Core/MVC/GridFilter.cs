//using System.Collections.Generic;
//using System.Web;

//namespace CMS.Core.MVC
//{
//    public class GridFilter
//    {
//        public string Field { get; set; }
//        public string Operator { get; set; }
//        public string Value { get; set; }
//    }
    
//    public class FilterCollection
//    {
//        public List<GridFilter> Filters { get; private set; }
//        private FilterCollection()
//        {
//            Filters = new List<GridFilter>();
//        }

//        public static FilterCollection BuildEmptyCollection()
//        {
//            return new FilterCollection();
//        }

//        public static FilterCollection BuildCollection(HttpRequestBase request)
//        {
//            var collection = BuildEmptyCollection();

//            var idex = 0;
//            while (true)
//            {
//                var filter = new GridFilter()
//                {
//                    Field = request.Params["filter[filters][" + idex + "][field]"],
//                    Operator = request.Params["filter[filters][" + idex + "][operator]"],
//                    Value = request.Params["filter[filters][" + idex + "][value]"]
//                };

//                if (filter.Field == null) { break; }
//                collection.Filters.Add(filter);
//                idex++;
//            }

//            return collection;
//        }
//    }

    
//}