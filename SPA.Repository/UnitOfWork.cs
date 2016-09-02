using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SPA.Models;
using SPA.Context;

namespace SPA.Repository
{
public  class UnitOfWork:IUnitOfWork
    {
    private GenericRepository<Student> studentRepo;
    private SPADbContext context = new SPADbContext();


        public GenericRepository<Student> getStudentGeneric
        {
            get {

                if (studentRepo == null)
                {
                    studentRepo = new GenericRepository<Student>(context);
                }

                    return studentRepo;
            
                   
            }
        }

        public bool SaveChanges()
        {
            try
            {
                context.SaveChanges();

                return true;

            } 


            catch            {
                return false;
            }
        }
    }
}
