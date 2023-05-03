(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
    $scope.inputdishes = "";
    $scope.outputMessage = "";
    $scope.colors = {};
    $scope.colors.current = {color: "black"};

    $scope.getDishesCSV = function () {
      var dishes = $scope.inputDishes

      if (dishes == null || dishes.length == 0) {
        $scope.outputMessage = "Please enter data first";
        $scope.colors.current = {color: "red"};
      }else{
        var ary = dishes.split(",");
        var count = 0;

        //check lengths of each string
        for(var i = 0; i < ary.length; i++){
          if(ary[i].trim().length != 0){
            count++;
          }
        }

        if (count > 3) {
          $scope.outputMessage = "Too Much!";
          $scope.colors.current = {color: "green"};
        }
        else if (count <= 3 && count != 0) {
          $scope.outputMessage = "Enjoy!";
          $scope.colors.current = {color: "green"};
        }
        else{
          $scope.outputMessage = "Please enter data first";
          $scope.colors.current = {color: "red"};
        }
    }

    };
  };
})();
