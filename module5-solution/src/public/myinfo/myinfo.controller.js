(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {
  var $ctrl = this;
  $ctrl.signedUp = false;
  //$ctrl.menuCategories = menuCategories;

  $ctrl.myPerson = SignUpService.getMyPerson();

  if ($ctrl.myPerson != null) {
    $ctrl.signedUp = true;
    $ctrl.firstname = $ctrl.myPerson.firstname;
    $ctrl.lastname = $ctrl.myPerson.lastname;
    $ctrl.email = $ctrl.myPerson.email;
    $ctrl.phonenumber = $ctrl.myPerson.phone;
    //$ctrl.favoritedish = $ctrl.myPerson.favoritedish;
    $ctrl.favoritedishname = $ctrl.myPerson.favoritedishname;
    $ctrl.description = $ctrl.myPerson.description;
    $ctrl.category = $ctrl.myPerson.favoritedishcategory;
    $ctrl.menuitem = $ctrl.myPerson.favoritedishcategory + $ctrl.myPerson.favoritedishmenunumber;

    //$ctrl.favoritedishimgsrc = 'images/menu/' + $ctrl.category + '/' + $ctrl.menuitem + '.jpg';
  }
}


})();
