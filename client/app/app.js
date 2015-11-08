(function(){
'use strict';

angular.module('trelloApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial',
  'mgcrea.ngStrap',
  'firebase',
  'ngMessages',
  'angular-md5'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider
    .otherwise('/');

  

  $locationProvider.html5Mode(true);
}])
.run(['$rootScope', '$state', 'serveUser',function($rootScope, $state, serveUser) {

      $rootScope.$on('$stateChangeStart', function() {
        var loggedInUser = serveUser.getLoggedInUser();
        if(loggedInUser) {
          $rootScope.loggedInUserData = loggedInUser.password;
        }
      });
  }]);

})();