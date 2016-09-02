/// <reference path="angular.min.js" />
/// <reference path="Services.js" />

var appStudent = angular.module("angularStudent", ['ngRoute']);


appStudent.controller("mainController", function ($scope) {
    $scope.message = "This is Sigle Page Application";

})


appStudent.service("studentService", function ($http) {
    
    console.log("insertController234");
    this.insertSt = function (student) {
        console.log("insertController2345");

        var response = $http({
            method: "post",
            url: "Student/Register",
            data: student
            //dataType: "json"
        })
        .then(function successCallback(respo) {
            var jsonText = JSON.stringify(respo);
            //         alert("JSON TEXT==" + jsonText);
            var jsonParse = JSON.parse(jsonText);
            //     alert("JSON PARSE-->" + jsonParse);
            var aa = respo.data;
            alert("Success=>" + aa.message);

        }
        )
        .then(function errorCallback(respo) {
            var jsonText = JSON.stringify(respo);
            //         alert("JSON TEXT==" + jsonText);
            var jsonParse = JSON.parse(jsonText);
            //     alert("JSON PARSE-->" + jsonParse);
            var aa = jsonParse.data;
            alert("Un Success=>" + aa.message);
        });
        return response;

       
    }

    this.updateStudentService=function(student)
    {
       
        console.log("Update Servcie function Stared...");

        console.log(student.Id);
        console.log(student.Name);
        var response = $http({
            method: 'put',
            url: 'Student/UpdateStudent',
            data: student,
            dataType:'json'
        })
        console.log("Update Servcie function finised...");
        return response;
    }

    this.SearchService = function (roll) {
        console.log("This is Search function");

        var response = $http({
            method: "post",
            url: "Student/SearchStudent",
            params:
                {
                    Roll: roll
                }
        });
        //console.log(response.data);
        return response;
    };


    this.getAllStudentService=function()
    {
        
            console.log("This is get Students");


            var response = $http({
                method: "get",
                url: "Student/GetAllStudent"
            });
            console.log("This is get Students returning");
            return response;
    }

});


appStudent.config(function ($routeProvider) {
    $routeProvider
    .when('/Register', {
        templateUrl: 'Student/Register',
        controller: 'studentController'
    })

    .when('/Search', {
        templateUrl: 'Student/Search',
        controller: 'studentController'
    })

    .when('/Delete', {
        templateUrl: 'Student/Delete',
        controller: 'studentController'

    })
    .when('/Update', {
        templateUrl: 'Student/Update',
        controller: 'studentController'
    })

     .when('/GetAll', {
         templateUrl: 'Student/GetAll',
         controller: 'studentController'
     })
})

    appStudent.controller('studentController', function ($scope, studentService) {
        console.log("insertController1233");
 

        GetAllStudentList();
       function GetAllStudentList() {

            console.log("Inside List Function");
            $scope.studentData = [];
            var list = studentService.getAllStudentService();
            console.log("service competed");
            list.then(function (student) {

              

                console.log("StudentList Data");
                $scope.studentData = student.data;
           
               

            }
            );

        };


       $scope.studentModel =
   {
       Id: '',
       Name: '',
       Address: '',
       Phone: ''
   };

       $scope.student =
{
    Id: '',
    Name: '',
    Address: '',
    Phone: ''
};


        $scope.InsertService = function () {
            console.log("insertController2");

            console.log("insertController23");

            console.log($scope.student.Id);
            console.log($scope.student.Name);
            console.log($scope.student.Address);
            var stud = ({
                Id: $scope.student.Id,
                Name: $scope.student.Name,
                Address: $scope.student.Address,
                Phone: $scope.student.Phone
            });
            console.log(stud.Id);
            console.log(stud.Name);
            console.log(stud.Address);
            console.log(stud.Phone);

            
            var serv = studentService.insertSt(stud);

            $scope.student.Id = "";
            $scope.student.Name = "";
            $scope.student.Address = "";
            $scope.student.Phone = "";

        }


        $scope.UpdateStudentController=function()
        {
            var sts = {

                Id: $scope.studentModel.Id,
                Name: $scope.studentModel.Name,
                Address: $scope.studentModel.Address,
                Phone: $scope.studentModel.Phone
            }
            console.log('udate method');
            console.log($scope.studentModel.Id);
            console.log(sts.Name);
            console.log($scope.studentModel.Address);
            console.log("Update Servcie");
           var updateResponse=studentService.updateStudentService(sts)
           console.log("Update Service Finished");

           updateResponse.then(function(mess)
           {
               var msg = mess.data;
               alert(msg.message);
               $scope.studentModel.Id = "";
               $scope.studentModel.Name = "";
               $scope.studentModel.Address = "";
               $scope.studentModel.Phone = "";
               $scope.hideTable = false;
              ;

           }
           
           )
        }

        $scope.SearchController=function()
        {
            console.log("Inside Search Controller");
            $scope.hideTable = true;
            console.log($scope.studentModel.Id);
            var roll = $scope.studentModel.Id;
           console.log("Roll no is "+roll);
           var searchdata = studentService.SearchService(roll);
            //$scope.hideTable = true;


           searchdata.then(function (book) {

     //          $scope.studentModel =
     //{
     //    Roll: '',
     //    Name: '',
     //    Address: '',
     //    Phone:''
     //};

              // $scope.isVisible = true;
               console.log("book funciton");
               $scope.studentList = JSON.stringify(book.data);

              // alert("Sanjit" + JSON.stringify(book.data));

               //$scope.Name = book.data.Name;
               $scope.studentModel.Id = book.data.Id;
               $scope.studentModel.Name = book.data.Name;
               $scope.studentModel.Address = book.data.Address;
               $scope.studentModel.Phone = book.data.Phone;
               $('<h1>Hello i am Jwery</h1>').prependTo$('#divSearch');
               alert("Message Apered")
               
               //alert(aa);
           }
           );

          // alert(search.data.Name);
        }
    });


