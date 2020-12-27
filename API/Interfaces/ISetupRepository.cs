using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Interfaces
{
    public interface ISetupRepository
    {
            Task<IEnumerable<SetupDto>> GetSetupsAsync();
            Task<IEnumerable<SetupDto>> GetSetupsByIdAsync(int id);
    }
}