angular.module('templates.mxPassport', [])

.controller('MxPassportController', function ($scope) {
  $scope.type = "T";
  $scope.countryCode = "IT";
  $scope.passportNo = 12345678;
  $scope.surnames = "Doe";
  $scope.givenNames = "John";
  $scope.nationality = "Mexican";
  $scope.curp = "343sdfsgs4eklsd";
  $scope.dob = "August 3, 1993";
  $scope.gender = "M";
  $scope.placeOfBirth = "Santa Barbara";
  $scope.issueDate = "February 14, 2012";
  $scope.expirationDate = "February 14, 2022";
  $scope.authority = "Foreign Minister";
  $scope.footer1 = "dsfsadfjlo4sdfi45dsf";
  $scope.footer2 = "sdf43589dshlifa";

  // $scope.getLinks = function () {
  //   Links.getLinks()
  //   .then(function (promise) {
  //     console.log("promise.data", JSON.stringify(promise.data));
  //     $scope.data.links = promise.data;
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });

  //   // .then(function (token) {
  //   //   $window.localStorage.setItem('com.shortly', token);
  //   //   $location.path('/links');
  //   // })
  //   // .catch(function (error) {
  //   //   console.error(error);
  //   // });
  // };
  // $scope.getLinks();

});