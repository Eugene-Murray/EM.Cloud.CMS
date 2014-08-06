using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.Models
{
    public class ModelBase
    {
        [DisplayName("Created On")]
        public DateTime? CreatedOn { get; set; }

        [DisplayName("Modified On")]
        public DateTime? ModifiedOn { get; set; }

        [DisplayName("Created On"), StringLength(256)]
        public string CreatedBy { get; set; }

        [DisplayName("Modified On"), StringLength(256)]
        public string ModifiedBy { get; set; }
    }
}
