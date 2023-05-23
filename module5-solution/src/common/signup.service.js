(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath', '$cookies'];
function SignUpService($http, ApiPath, $cookies) {
  var service = this;
  var myPerson;

  service.getMenuItemByShortName = function (category_short_name, menu_number) {
    return $http.get(ApiPath + '/menu_items/' + category_short_name + '/menu_items/' + menu_number + '.json').then(function (response) {
      return response.data;
    });
  };

  service.setMyPerson = function (firstname, lastname, email, phone, favoritedishcategory, favoritdishmenunumber, description, favoritedishname) {
    myPerson = { firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      favoritedishcategory: favoritedishcategory,
      favoritedishmenunumber: favoritdishmenunumber,
      description: description,
      favoritedishname: favoritedishname};

    console.log(myPerson);
    $cookies.putObject('myPerson', myPerson);
  };

  service.getMyPerson = function (firstname, lastname, email, phone, favoritedish ) {
    myPerson = $cookies.getObject('myPerson');

    console.log(myPerson);

    return myPerson;
  };

}



})();
