using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace API.Entities
{
public class Part
 {
   public int Id { get; set; }
   public string Name { get; set; }
   public string Description { get; set; }
   public string BuyUrl { get; set; }
   public int CategoryId { get; set; }
   public Category Category{ get; set; }
   public ICollection<Photo> Photos { get; set; }
 }
}