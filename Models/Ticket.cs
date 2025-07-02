using helpdesk.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class Ticket
{
    public int TicketID { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public string Status { get; set; }

    public string Priority { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;


    public DateTime? UpdatedAt { get; set; }


    public int? CreatedBy { get; set; }

    [ForeignKey("CreatedBy")]
    [JsonIgnore] // Frontend'den gönderilmeyecek
    public User? CreatedByUser { get; set; }
}
