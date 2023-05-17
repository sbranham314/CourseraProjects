(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  //console.log("in itemscontroller!");
  //console.log(item);
  var itemdetail = this;

  itemdetail.items = items;

  console.log(itemdetail.items);

  // itemdetail.name = item.name;
  // itemdetail.price_large = item.price_large;
  // itemdetail.description  = item.description;


}

})();
