using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class AFE_Type
    {
        public AFE_Type()
        {
            Aves = new HashSet<AFE>();
        }

        [Key]
        public int Id { get; set; }
        public string Description { get; set; } = null!;

        public virtual ICollection<AFE> Aves { get; set; }
    }
}
