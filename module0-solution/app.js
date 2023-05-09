(function() {
'use strict';

angular.module('DIApp', [])
.controller('DiController', DiController);

  function DiController ($scope, $filter, $injector) {
    $scope.name = "Samuel";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DiController));
  }

  function AnnotateMe(name, job, blah) {
    return "Blah!";
  }

  console.log(DiController.toString());
})();
