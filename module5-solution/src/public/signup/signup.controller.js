(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var $ctrl = this;
  $ctrl.error = false;
  $ctrl.success = false;
  //$ctrl.menuCategories = menuCategories;

  $ctrl.submit = function () {
    var shortname = $ctrl.favoritedish;
    var first, second;

    if (shortname.length == 2) {
      first = shortname[0];
      second = shortname[1];
    }else if (shortname.length == 3) {
      if (isNumeric(shortname[1])){
        first = shortname[0];
        second = shortname[1] + shortname[2];
      }else{
        first = shortname[0] + shortname[1];
        second = shortname[2];
      }
    }else if (shortname.length == 4) {
      first = shortname[0] + shortname[1];
      second = shortname[2] + shortname[3];
    }else{
      console.log("invalid short name supplied!")
      $ctrl.error = true;
      return false;
    }

    SignUpService.getMenuItemByShortName(first, second).then(function (response) {
      console.log(response);
      if (response == null) {
        $ctrl.error = true;
        console.log("response was null, person not saved!");
        return false;
      }else{
        SignUpService.setMyPerson($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phonenumber, first, second, response.description, response.name);
        $ctrl.success = true;
        console.log("person was saved!");
      }
    })
    .catch(function (error) {
      console.log("something went wrong!");
    });
    //console.log("form submitted");
  };
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}


})();
