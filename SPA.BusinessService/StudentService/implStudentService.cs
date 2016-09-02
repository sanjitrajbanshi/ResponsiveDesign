using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SPA.Models;
using SPA.Repository;
namespace SPA.BusinessService.StudentService
{
    public class implStudentService:IStudentService
    {
        IUnitOfWork work = new UnitOfWork();
        public IEnumerable<Models.Student> getAll()
        {

            return work.getStudentGeneric.Get();

            //throw new NotImplementedException();
        }

        public Models.Student getStudentById(int id)
        {

            Student st = work.getStudentGeneric.GetByID(id);
            return st;
            //throw new NotImplementedException();
        }

        public bool InsertStudent(Models.Student st)
        {

            try
            {
                work.getStudentGeneric.Insert(st);
                return true;
            }
            catch
            {
                return false;
            }
            //throw new NotImplementedException();
        }

        public void DeleteStudent(int id)
        {
            work.getStudentGeneric.Delete(id);

            //throw new NotImplementedException();
        }

        public void UpdateStudent(Models.Student st)
        {
            work.getStudentGeneric.Update(st);

            //throw new NotImplementedException();
        }


        public void SaveChanges()
        {
            work.SaveChanges();
            //throw new NotImplementedException();
        }
    }
}
