(function(){
  'use strict';
  var state = function($stateProvider){
    $stateProvider
      .state('profile',{
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl as profile'
      })
  }
  angular
    .module('trelloApp')
    .config(['$stateProvider',
      state
    ])
})()