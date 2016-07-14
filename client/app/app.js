Angular.module('app', ['app.services'])
.controller('MainContoller', function($scope, API) {

  $scope.states = [];
  $scope.error = false;

  var getStates = function() {
    API.getAll()
      .then(function(resp) {
        $scope.states = resp.data.states;
      })
      .catch(function(error) {
        console.log(error);
        $scope.error = true;
      });
  };
}).filter('inProgramConvert', function() {
  return function(bool) {
    console.log(bool);
    if(bool) {
      return "yes";
    }
    return "no";
  };
});
