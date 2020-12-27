using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class SetupsController : BaseApiController
  {
    private readonly IMapper _mapper;
    private readonly ISetupRepository _setupRepository;
    public SetupsController(IMapper mapper, ISetupRepository setupRepository)
    {
      _setupRepository = setupRepository;
      _mapper = mapper;
    }

    [HttpGet()]
    public async Task<ActionResult<IEnumerable<SetupDto>>> GetSetups()
    {
      return Ok(await _setupRepository.GetSetupsAsync());
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<IEnumerable<SetupDto>>> GetSetupById(int id)
    {
      return Ok(await _setupRepository.GetSetupsByIdAsync(id));
    }
  }
}