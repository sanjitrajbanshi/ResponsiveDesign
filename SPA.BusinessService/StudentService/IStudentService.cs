using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SPA.Models;
namespace SPA.BusinessService.StudentService
{
   public interface IStudentService
    {
        IEnumerable<Student> getAll();
        Student getStudentById(int id);
        bool InsertStudent(Student st);
        void DeleteStudent(int id);
        void UpdateStudent(Student st);

        void SaveChanges();




    }
}
