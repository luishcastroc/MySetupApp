using System;
using System.Collections.Generic;

namespace API.DTOs
{
  public class SetupDto
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public Boolean IsMain { get; set; }
    public string PhotoUrl { get; set; }
    public ICollection<PhotoDto> Photos { get; set; }
    public ICollection<PartDto> Parts { get; set; }
    public string UserName { get; set; }
  }
}