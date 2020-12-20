using System;
using System.Collections.Generic;

namespace API.Entities
{
  public class Setup
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public Boolean IsMain { get; set; }
    public ICollection<Photo> Photos { get; set; }
    public ICollection<Part> Parts { get; set; }
    public AppUser User { get; set; }
    public int UserId { get; set; }
  }
}