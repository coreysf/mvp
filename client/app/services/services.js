angular.module('templates.services', [])

.factory('Template', function ($http) {
  // Your code here
  var getTemplate = function () {
    return $http({
      method: 'GET',
      url: '/classes/mexico'
    });
  };

  var addTemplate = function(template) {
    console.log("template: " + JSON.stringify(template));
    return $http({
      method: 'POST',
      url: '/classes/mexico',
      data: template
    });
  };

  return {
    getTemplate: getTemplate,
    addTemplate: addTemplate
  };
  // return {getLinks: getLinks};  // OLD POSITION

});
