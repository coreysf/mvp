angular.module('templates', [
  'templates.mxPassport',
  'templates.services'
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .when('/it_passport', {
      templateUrl: 'app/itPassport/it_passport_template.html',
      controller: 'ItPassportController',
      css: '../styles/style.css'
    })
    .when('/mx_passport', {
      templateUrl: 'app/mxPassport/mx_passport_template.html',
      controller: 'MxPassportController',
      css: '../styles/style.css'
    });

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
});






/************************************************************/
// Handle the wildcard route last - if all other routes fail
// assume the route is a short code and try and handle it here.
// If the short-code doesn't exist, send the user to '/'
/************************************************************/

// app.get('/*', function(req, res) {
//   new Link({ code: req.params[0] }).fetch().then(function(link) {
//     if (!link) {
//       res.redirect('/');
//     } else {
//       var click = new Click({
//         link_id: link.get('id')
//       });

//       click.save().then(function() {
//         link.set('visits', link.get('visits')+1);
//         link.save().then(function() {
//           return res.redirect(link.get('url'));
//         });
//       });
//     }
//   });
// });

// console.log('Shortly is listening on 4568');
// app.listen(4568);




// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to stop all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.shortly');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to signin/signup
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//       $location.path('/signin');
//     }
//   });

//   // $rootScope.$on('$routeChangeSuccess', function (evt, next, current) {
//   //   if ($location.path() === '/links') {
//   //     evt.targetScope.getLinks();
//   //   }
//   // })
// });
