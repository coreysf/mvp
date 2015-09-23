angular.module('templates.mxPassport', [])

.controller('MxPassportController', function ($scope, Template) {
  $scope.doc = {};

  $scope.doc.documenttype = "T";
  $scope.doc.countryCode = "IT";
  $scope.doc.passportNo = 12345678;
  $scope.doc.surnames = "Doe";
  $scope.doc.givenNames = "John";
  $scope.doc.nationality = "Mexican";
  $scope.doc.curp = "343sdfsgs4eklsd";
  $scope.doc.dob = "August 3, 1993";
  $scope.doc.gender = "M";
  $scope.doc.placeOfBirth = "Santa Barbara";
  $scope.doc.issueDate = "February 14, 2012";
  $scope.doc.expirationDate = "February 14, 2022";
  $scope.doc.authority = "Foreign Minister";
  $scope.doc.footer1 = "dsfsadfjlo4sdfi45dsf";
  $scope.doc.footer2 = "sdf43589dshlifa";
})
.controller('MxPassportFormController', function($scope, Template) {
  $scope.doc = {};

  $scope.addTemplate = function (mxPassport) {

    $scope.doc.doctype;
    $scope.doc.countryCode;
    $scope.doc.passportNo;
    $scope.doc.surnames;
    $scope.doc.givenNames;
    $scope.doc.nationality;
    $scope.doc.curp;
    $scope.doc.dob;
    $scope.doc.gender;
    $scope.doc.placeOfBirth;
    $scope.doc.issueDate;
    $scope.doc.expirationDate;
    $scope.doc.authority;
    $scope.doc.footer1;
    $scope.doc.footer2;

    Template.addTemplate($scope.doc)
    .then(function (template) {
      console.log("template.data", JSON.stringify(template.data));
      // $scope.data.links = template.data;
    })
    .catch(function (err) {
      console.log(err);
    });
  };
});