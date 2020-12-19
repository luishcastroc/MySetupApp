using System;

namespace API.Entities
{
  public class Photo
  {
    public int Id { get; set; }
    public Boolean IsMain { get; set; }
    public string Url { get; set; }
    public string PublicId { get; set; }
  }
}