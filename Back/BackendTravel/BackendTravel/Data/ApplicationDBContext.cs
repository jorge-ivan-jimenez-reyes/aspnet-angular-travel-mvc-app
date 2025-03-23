using Microsoft.EntityFrameworkCore;

namespace BackendTravel.Data;

public class ApplicationDBContext : DbContext

{
     public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
     {
          
     }
}