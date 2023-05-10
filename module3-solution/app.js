(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItemsDirective)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json");

function FoundItemsDirective() {
   var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      items: '<',
      title: '@',
      onRemove: '&',
      showError: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function NarrowItDownDirectiveController(){
  var list = this;

}

NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
function NarrowItDownController (MenuSearchService, $scope) {
 var narrowItDown = this;

 narrowItDown.searchItem = "";
 narrowItDown.items = [];
 narrowItDown.title = "Menu Items";

 narrowItDown.getMenuItems = function (searchItem) {
     narrowItDown.items = MenuSearchService.getMatchedMenuItems(searchItem);
 }

 narrowItDown.removeItem = function (itemIndex) {
   MenuSearchService.removeItem(itemIndex);
 }

 narrowItDown.displayError = function () {
   return MenuSearchService.showError();
 }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  var items = [];
  var showError = false;

  service.getMatchedMenuItems = function (searchTerm) {
    items = [];

    if(searchTerm == ""){
      showError = true;
    }else{
      var response = $http({
        method: "GET",
        url: ApiBasePath
      }).then(function (response) {
        for (var category in response.data) {
          for(var menuItem in response.data[category]["menu_items"]){
              if(response.data[category]["menu_items"][menuItem]["description"].includes(searchTerm)){
                items.push({name: response.data[category]["menu_items"][menuItem]["name"],
                            short_name: response.data[category]["menu_items"][menuItem]["short_name"],
                            description: response.data[category]["menu_items"][menuItem]["description"]});
              }
          }
        }

        if(items == undefined || items.length == 0){
          showError = true;
        }else{
          showError = false;
        }
      })
      .catch(function (error) {
        console.log("something went wrong!");
      });
    }


    return items;
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);

    if(items.length == 0){
      showError = true;
    }
  };

  service.getItems = function () {
    return items;
  };

  service.showError = function () {
    return showError;
  }
}

})();
