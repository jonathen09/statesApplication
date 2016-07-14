Angular.module('app.services',[])

.factory('API', function($http) {

  var getAll = function() {
    $http({
      method: "GET",
      url: 'http://service-area-preview.api.ygreneworks.com/states/get-all/v1'
    })
    .then(function(data) {
      return data;
    }, function(failure) {
      console.err(failure);
    });
  };
  return {
    getAll: getAll
  };

});
