(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);
// .constant('CategoryPath', "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
// .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json");


MenuAppController.$inject = ['items'];
function MenuAppController(items) {
  var mainList = this;

  mainList.items = items;
}

})();
