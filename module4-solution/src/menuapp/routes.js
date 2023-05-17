(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  //console.log("inside routes config");
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menuapp.template.html',
    controller: 'MenuAppController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
      return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            //console.log($stateParams.itemId);
            //console.log(MenuDataService.getCategories()[$stateParams.itemId]['short_name']);

            return MenuDataService.getItemsForCategory(MenuDataService.getCategories()[$stateParams.itemId]['short_name']);
          }]
    }
  });
}

})();
