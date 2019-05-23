/*angular.module("myApp", [])
      .controller("myFirstController",['$scope', function ($scope){
          console.log("This is form controller");
          $scope.hello="hello world";
      }]);*/

      angular.module("myApp").controller("myFirstController", function ($scope)
      {
          let Student= {
              FirstName: "Sowmya Reddy",
              LastName : "Kumbham",
              StudentId : "S534805@nwmisouri.edu"
          }
          $scope.Student=Student;
          
      });