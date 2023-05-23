(function() {
"use strict";

angular.module('common', ['ngCookies'])
.constant('ApiPath', 'https://coursera-jhu-default-rtdb.firebaseio.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
