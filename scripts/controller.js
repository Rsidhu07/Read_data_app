app.controller("myctrl",($scope,HttpService,$location,$filter,$http)=>{
   
  //   HttpService.getPost()
  //   .then(function(response) {
  //   $scope.post = response;
  // });
  HttpService.getUsers()
  .then(function(response) {
   $scope.users = response;
 });

//  $scope.detail=function(SelectedRecordeid){

//   var NameObj = $filter('filter')($scope.users, { id: SelectedRecordeid })[0];

//   localStorage.setItem("NamesDetails",JSON.stringify(NameObj));

//   $location.path('/views/users');
// };

// localStorage.getItem("NameDetails");

// console.log(localStorage.NameDetails);

$scope.GetDetails = function (index) {
  var idd = $scope.users[index].id;
  var firstname = $scope.users[index].first_name;
  var lastname = $scope.users[index].last_name;
  var companyname = $scope.users[index].company_name;
  var statee = $scope.users[index].state;
  var zipp = $scope.users[index].zip;
  var emaill = $scope.users[index].email;
  var webb = $scope.users[index].web;
  var agee = $scope.users[index].age;
  console.log("First Name: " + firstname + " \Last Name: " + lastname + " \ID : "+ idd + " \Company_name: " + companyname + " \state"+statee+ " \ZIP: " + zipp + " \Email: " + emaill + " \Web: " + webb + " \Age:" + agee);

  $location.path("/users");

};
   
   
   
   
    // $scope.item = {};
    // $scope.items = [];
    // $scope.markCount = 0;
    // $scope.add=()=>{
    //     //console.log("Add ",scope.item);
    //     var items = factory.add(scope.item);
    //     $scope.items = items;
    // };

});
    
    