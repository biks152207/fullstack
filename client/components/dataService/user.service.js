(function(){
  'use strict';
  var UserService = function($firebaseObject){
    function newUserRef(user){
      var ref = new Firebase('https://biksrealtime.firebaseio.com/users/' + user.uid);
      return $firebaseObject(ref);
    }

    function getUserData(user){
      var ref = new Firebase('https://biksrealtime.firebaseio.com/' + user);
      return $firebaseObject(ref);
    }

    function getLoggedInUser() {
      var user = localStorage.getItem('firebase:session::biksrealtime');
      console.log(user);
      if(user) {
        return JSON.parse(user);
      }
    }

    return {
      newUserRef: newUserRef,
      getUserData: getUserData,
      getLoggedInUser: getLoggedInUser
    };

  };
  angular
    .module('trelloApp')
    .factory('serveUser', UserService);

})();