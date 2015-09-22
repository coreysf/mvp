angular.module('templates.itPassport', [])

.controller('ItPassportController', function ($scope, Links) {
  $scope.data = {};

  $scope.p.type = "T";
  $scope.p.countryCode = "IT";
  $scope.p.passportNo = 12345678;
  $scope.p.surnames = "Doe";
  $scope.p.givenNames = "John";
  $scope.p.nationality = "Italian";
  $scope.p.dob = "August 3, 1993";
  $scope.p.gender = "M";
  $scope.p.placeOfBirth = "Santa Barbara";
  $scope.p.issueDate = "February 14, 2012";
  $scope.p.authority = "Foreign Minister";
  $scope.p.expirationDate = "February 14, 2022";
  $scope.p.footer1 = "dsfsadfjlo4sdfi45dsf";
  $scope.p.footer2 = "sdf43589dshlifa";

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