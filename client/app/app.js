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
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider
    .otherwise('/');

  

  $locationProvider.html5Mode(true);
})
.run(['$rootScope', '$state', 'User', function($rootScope, $state, User) {

      // Listen for changes to the state and run the code
      // in the callback when the change happens
      $rootScope.$on('$stateChangeStart', function() {

        var loggedInUser = User.getLoggedInUser();
        if(loggedInUser) {
          $rootScope.loggedInUserData = loggedInUser.password;
        }
      });
    }]);