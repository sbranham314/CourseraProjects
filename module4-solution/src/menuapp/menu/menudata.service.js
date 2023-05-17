(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('CategoryPath', "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
.constant('ShortNamePath', 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json');


MenuDataService.$inject = ['$http', 'CategoryPath', 'ShortNamePath'];
function MenuDataService($http, CategoryPath, ShortNamePath) {
  var service = this;

  // List of shopping items
  var categories = [];
  var items = [];

  service.getAllCategories = function () {
    //console.log("inside service");
    categories  = [];

    var response = $http({
      method: "GET",
      url: CategoryPath
    }).then(function (response) {
          for (var category in response.data) {
            //console.log(response.data[category]);
            categories.push({name: response.data[category]["name"],
                       short_name: response.data[category]["short_name"]});
          }
      });

    return categories;

  };

  service.getCategories = function () {
    //console.log(categories);
    return categories;
  }

  service.getItemsForCategory = function (categoryShortName) {
    //console.log("inside getItemsForCategory!")
    items = [];

    //console.log(ShortNamePath.replace('{categoryShortName}', categoryShortName));
    var response = $http({
      method: "GET",
      url: ShortNamePath.replace('{categoryShortName}', categoryShortName)
    }).then(function (response) {
          //console.log(response);
          for (var item in response.data['menu_items']) {
            //console.log(response.data);
            // categories .push({name: response.data[category]["name"],
            //            short_name: response.data[category]["short_name"]});
            //console.log(response.data['menu_items'][item]);
            items.push({name: response.data['menu_items'][item]["name"],
                       description: response.data['menu_items'][item]["description"],
                       price_large: response.data['menu_items'][item]["price_large"]})
          }
          //console.log(items);
      });

    //console.log(items);
    return items;
  };
}

})();
