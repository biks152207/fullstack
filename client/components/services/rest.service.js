/* Authentication service*/
(function(){
  'use strict';
  function AuthService(RESTFUL_URI, $firebaseAuth){
    var ref = new Firebase(RESTFUL_URI);
    return $firebaseAuth(ref);
  }
  angular.module('trelloApp')
    .factory('Auth',[
      'RESTFUL_URI',
      '$firebaseAuth',
      AuthService
    ]);
})();