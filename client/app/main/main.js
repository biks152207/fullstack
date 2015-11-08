'use strict';

angular.module('trelloApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  }]);