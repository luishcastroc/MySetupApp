using System.Collections.Generic;

namespace API.DTOs
{
  public class PartDto
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string BuyUrl { get; set; }
    public string Category{ get; set; }
    public ICollection<PhotoDto> Photos { get; set; }
  }
}