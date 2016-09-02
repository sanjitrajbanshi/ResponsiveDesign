using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SPA.Models;




namespace SPA.Context
{
    public class SPADbContext:DbContext
    {
        public SPADbContext():base("DefaultConnection")
        {

        }

        public static SPADbContext Create()
        {
            return new SPADbContext();
        }

        public DbSet<Student> Students { get; set; }
        
    }
}
