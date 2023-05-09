(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyShowController', ToBuyShowController)
.controller('AlreadyBoughtShowController', AlreadyBoughtShowController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
 var toBuyAdder = this;

 toBuyAdder.itemName = "";
 toBuyAdder.itemQuantity = "";

 toBuyAdder.addItem = function () {
   ShoppingListCheckOffService.addItemToBuy(toBuyAdder.itemName, toBuyAdder.itemQuantity);
 }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var alreadyBoughtAdder = this;

  alreadyBoughtAdder.itemName = "";
  alreadyBoughtAdder.itemQuantity = "";

  alreadyBoughtAdder.addItem = function () {
    ShoppingListCheckOffService.addItemAlreadyBought(alreadyBoughtAdder.itemName, alreadyBoughtAdder.itemQuantity);
  }
}


ToBuyShowController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShowController (ShoppingListCheckOffService) {
   var showList = this;

   showList.items  = ShoppingListCheckOffService.getToBuyItems();

   showList.removeItem = function (itemIndex) {
     ShoppingListCheckOffService.removeToBuyItem(itemIndex);
   };
}

AlreadyBoughtShowController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShowController (ShoppingListCheckOffService) {
    var showList = this;

    showList.items  = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [{ name: "cookies", quantity: 10 },
                    { name: "drinks", quantity: 20 },
                    { name: "pizza", quantity: 4 },
                    { name: "ice cream", quantity: 8 },
                    { name: "cup cakes", quantity: 30 }
                   ];
  var alreadyBoughtItems = [];

  service.addItemToBuy = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  service.addItemAlreadyBought = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    alreadyBoughtItems.push(item);
  };

  service.removeToBuyItem = function (itemIndex) {
    var boughtItem = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);

    alreadyBoughtItems.push(boughtItem);
  }

  // service.removeAlreadyBoughtItem = function (itemIndex) {
  //
  // }

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
