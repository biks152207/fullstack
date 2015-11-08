(function(){
  'use strict';
  var Profile = function($scope, Status, md5, $rootScope){
    var profile = this;
    profile.addStatus = addStatus;
    profile.md5 = md5;
    profile.statusData = Status;

    function addStatus() {
      if(profile.statusText) {   
        profile.statusData.$add({

          // Add the status data to Firebase
          date: Firebase.ServerValue.TIMESTAMP,
          text: profile.statusText,
          user: {
            email: $rootScope.loggedInUserData.email
          }
        });
        profile.statusText = '';
      }
    }
  }
  angular.module('trelloApp')
    .controller('ProfileCtrl',[
      '$scope',
      'Status',
      'md5',
      '$rootScope',
      Profile
    ])
})()