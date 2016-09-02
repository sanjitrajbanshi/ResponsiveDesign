using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using SPA.Models;

namespace SPA.Context
{
   public class DbInitilizer:DropCreateDatabaseIfModelChanges<SPADbContext>
    {

       protected override void Seed(SPADbContext context)
       {
           context.Students.Add(new Student
           {
               Id = 101,
               Address = "IOWA",
               Phone = "20317777",
               Name = "Sanjit"
           });

           context.SaveChanges();
               
              
               
               


           
           
       }
    }
}
