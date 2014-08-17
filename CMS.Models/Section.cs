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
    public class Section
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Key, Column(Order = 3)]
        public int StructureTemplateId { get; set; }

        [ForeignKey("StructureTemplateId"), DisplayName("Structure Template")]
        public StructureTemplate StructureTemplate { get; set; }

        [ForeignKey("WidgetId"), DisplayName("Widget")]
        public Widget Widget { get; set; }
    }
}
