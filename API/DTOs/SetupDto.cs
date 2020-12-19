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
    public ICollection<PartDto> Parts { get; set; }
  }
}