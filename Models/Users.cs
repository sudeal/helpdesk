using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;




namespace helpdesk.Models
{
    public class User
    {
        public int UserID { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        public string Role { get; set; }

        public ICollection<Ticket> Tickets { get; set; }
    }
}
