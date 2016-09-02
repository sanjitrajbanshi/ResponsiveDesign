using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SPA.Context;
using SPA.Models;
using SPA.Repository;
using SPA.BusinessService.StudentService;


namespace SPAInforationSystem.Controllers
{
    public class StudentController : Controller
    {


        private IStudentService service = new implStudentService();

        //
        // GET: /Student/
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        public ActionResult Search()
        {
            return View();
        }

        public ActionResult Update()
        {
            return View();
        }

        public ActionResult Delete()
        {
            return View();
        }

        public ActionResult GetAll()
        {
            return View();
        }
        [HttpPost]
        public JsonResult Register(Student stu)
        {

            Student st = new Student();

            st = stu;
           
           if (service.InsertStudent(st))
            {
                service.SaveChanges();
               
                    return Json(new { message = "The Data Inserted Successfully" }, JsonRequestBehavior.AllowGet);
                           }

            else
                return Json(new { message = "Something Went wrong" }, JsonRequestBehavior.AllowGet);

            
           
        }

        [HttpGet]

        public JsonResult GetAllStudent()
        {


            IEnumerable<Student> list = service.getAll();

            return Json(list, JsonRequestBehavior.AllowGet);

        }


        public JsonResult SearchStudent(string roll)
        {
            string r = roll;


            int rollno = System.Convert.ToInt32(roll);

            Student st=service.getStudentById(rollno);

            string name = st.Name;
            if (!(st == null))
            {
                return Json( st , JsonRequestBehavior.AllowGet);
            }

            else
            {
                return Json(new { message = "Something Went wrong" }, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPut]
        public JsonResult UpdateStudent(Student student)
        {
            Student st = student;
          
            service.UpdateStudent(st);

                service.SaveChanges();

             return Json(new { message = "The Record Updated Successfully" }, JsonRequestBehavior.AllowGet);
                           

            
        }

    }
}
