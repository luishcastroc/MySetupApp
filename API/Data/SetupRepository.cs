using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
  public class SetupRepository : ISetupRepository
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public SetupRepository(DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _context = context;
    }

    public async Task<IEnumerable<SetupDto>> GetSetupsAsync()
    {
        return await _context.Setup
            .ProjectTo<SetupDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<IEnumerable<SetupDto>> GetSetupsByIdAsync(int id)
    {
        return await _context.Setup
            .Where(setup => setup.UserId == id)
            .ProjectTo<SetupDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }
  }
}