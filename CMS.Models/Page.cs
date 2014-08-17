using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.Models
{
    public class Page : ModelBase
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [ForeignKey("StructureTemplateId"), DisplayName("Structure Template")]
        public StructureTemplate StructureTemplate { get; set; }

        //[Key, Column(Order = 1)]
        //public int TeamId { get; set; }

        //[ForeignKey("TeamId"), DisplayName("Team")]
        //public Team Team { get; set; }
    }
}
