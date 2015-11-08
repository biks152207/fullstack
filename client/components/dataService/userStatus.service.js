(function(){
  'use strict';
  var StatusService = function($firebaseArray, RESTFUL_URI){
    var ref = new Firebase(RESTFUL_URI + 'status');
    return $firebaseArray(ref);
  }
  angular
    .module('trelloApp')
    .factory('Status', [
      '$firebaseArray',
      'RESTFUL_URI',
      StatusService
    ])
})();