﻿//using System;
//using System.Collections;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace CMS.Core.Validation
//{
//    public class ValidateObjectAttribute : ValidationAttribute
//    {
//        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
//        {
//            var results = new List<ValidationResult>();
//            var context = new ValidationContext(value, null, null);

//            Validator.TryValidateObject(value, context, results, true);

//            if (results.Count != 0)
//            {
//                var compositeResults = new CompositeValidationResult(String.Format("Validation for {0} failed!", validationContext.DisplayName));
//                results.ForEach(compositeResults.AddResult);

//                return compositeResults;
//            }

//            return ValidationResult.Success;
//        }
//    }

//    public class ValidateObjectCollectionAttribute : ValidationAttribute
//    {
//        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
//        {
//            var evalues = value as IEnumerable;
//            var compositeResults  = validationContext != null ? new CompositeValidationResult(String.Format("Validation for {0} failed!", validationContext.DisplayName)) 
//                : new CompositeValidationResult(String.Format("Validation for collection failed!"));

//            var isSuccess = true;
//            if (evalues != null)
//                foreach (var evalue in evalues)
//                {
                    
//                    var context = new ValidationContext(evalue, null, null);
//                    var results = new List<ValidationResult>();
//                    Validator.TryValidateObject(evalue, context, results, true);

//                    if (results.Count != 0)
//                    {
//                        results.ForEach(compositeResults.AddResult);
//                        isSuccess = false;
//                    }
//                }
//            return !isSuccess ? compositeResults : ValidationResult.Success;
//        }
//    }

//    public class CompositeValidationResult : ValidationResult
//    {
//        private readonly List<ValidationResult> _results = new List<ValidationResult>();

//        public IEnumerable<ValidationResult> Results
//        {
//            get
//            {
//                return _results;
//            }
//        }

//        public CompositeValidationResult(string errorMessage) : base(errorMessage) { }
//        public CompositeValidationResult(string errorMessage, IEnumerable<string> memberNames) : base(errorMessage, memberNames) { }
//        protected CompositeValidationResult(ValidationResult validationResult) : base(validationResult) { }

//        public void AddResult(ValidationResult validationResult)
//        {
//            _results.Add(validationResult);
//        }
//    }

//}
