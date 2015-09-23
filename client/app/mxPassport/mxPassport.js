angular.module('templates.mxPassport', [])

.controller('MxPassportController', function ($scope, Template) {
  $scope.doc = {};

  // $scope.doc.documenttype = "T";
  // $scope.doc.countryCode = "IT";
  // $scope.doc.passportNo = 12345678;
  // $scope.doc.surnames = "Doe";
  // $scope.doc.givenNames = "John";
  // $scope.doc.nationality = "Mexican";
  // $scope.doc.curp = "343sdfsgs4eklsd";
  // $scope.doc.dob = "August 3, 1993";
  // $scope.doc.gender = "M";
  // $scope.doc.placeOfBirth = "Santa Barbara";
  // $scope.doc.issueDate = "February 14, 2012";
  // $scope.doc.expirationDate = "February 14, 2022";
  // $scope.doc.authority = "Foreign Minister";
  // $scope.doc.footer1 = "dsfsadfjlo4sdfi45dsf";
  // $scope.doc.footer2 = "sdf43589dshlifa";

  $scope.getTemplate = function() {
    Template.getTemplate($scope.doc)
    .then(function (template) {
      console.log("GET template.data.results", JSON.stringify(template.data.results[0]));
      $scope.doc.documenttype = template.data.results[0].type;
      $scope.doc.countryCode = template.data.results[0].country_code;
      $scope.doc.passportNo = template.data.results[0].passport_no;
      $scope.doc.surnames = template.data.results[0].surnames;
      $scope.doc.givenNames = template.data.results[0].given_names;
      $scope.doc.nationality = template.data.results[0].nationality;
      $scope.doc.curp = template.data.results[0].curp;
      $scope.doc.dob = template.data.results[0].dob;
      $scope.doc.gender = template.data.results[0].gender;
      $scope.doc.placeOfBirth = template.data.results[0].place_of_birth;
      $scope.doc.issueDate = template.data.results[0].date_of_issue;
      $scope.doc.expirationDate = template.data.results[0].date_of_expiration;
      $scope.doc.authority = template.data.results[0].authority;
      $scope.doc.footer1 = template.data.results[0].footer1;
      $scope.doc.footer2 = template.data.results[0].footer2;
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  $scope.getTemplate();

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