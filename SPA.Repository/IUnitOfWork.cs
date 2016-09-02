using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SPA.Models;

namespace SPA.Repository
{
public interface IUnitOfWork
    {
    GenericRepository<Student> getStudentGeneric { get; }

    bool SaveChanges();

    }
}
