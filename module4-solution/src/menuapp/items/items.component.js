(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/menuapp/templates/itemlist.template.html',
  //controller: ItemsController,
  bindings: {
    items: '<'
    //myTitle: '@title',
    //onRemove: '&'
  }
});

})();
