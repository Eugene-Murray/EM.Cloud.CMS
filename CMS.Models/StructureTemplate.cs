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
    public class StructureTemplate : ModelBase
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        //[Key, Column(Order = 0)]
        //public int SectionId { get; set; }

        [Key, Column(Order = 2)]
        public int PageId { get; set; }

        [ForeignKey("PageId"), DisplayName("Page")]
        public Page Page { get; set; }

        public List<Section> Sections { get; set; }
    }
}
