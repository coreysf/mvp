angular.module('templates.services', [])

.factory('Template', function ($http) {
  // Your code here
  var getTemplate = function () {
    return $http({
      method: 'GET',
      url: '/api/templates'
    });
  };

  var addTemplate = function(template) {
    console.log("template: " + template);
    return $http({
      method: 'POST',
      url: '/api/templates',
      data: template
    });
  };

  return {
    getTemplate: getTemplate,
    addTemplate: addTemplate
  };
  // return {getLinks: getLinks};  // OLD POSITION

});
// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.shortly');
//   };

//   var signout = function () {
//     $window.localStorage.removeItem('com.shortly');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });
