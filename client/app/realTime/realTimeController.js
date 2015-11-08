(function(){
  'use stric';
  var realTime = function($scope, Auth, $state, $timeout, $log, $mdDialog, User){
    var real = this;
    real.showError = false;
    real.addUser = createUser;
    real.login = login;
    function showAlert(msg) {
      alert = $mdDialog.alert({
        title: 'Attention',
        content: msg,
        ok: 'Close'
      });
      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }
    /* clears the error message */
    real.clearErrorMsg = function(errorScope){
      // console.log(errorScope);
      $timeout(function(){
        real[errorScope] = false
      }, 2000);
    }
    function  createUser(validity){
      /* log out the logged in user if the user is already logged in*/
      if (validity){
        Auth.$unauth();
        Auth.$createUser({
          email: real.email,
          password: real.password
        }).then(function(userData){
          saveUser(userData);

        }).catch(function(error){
          var error = (JSON.stringify(error));
          showAlert(JSON.parse(error).code);
        })
      } else{
        real.showError = true;
        real.clearErrorMsg('showError');
      }
    }
    function saveUser(userData) {
      console.log(userData);
      var user = User.newUserRef(userData);
      console.log(real.username);
      console.log(real.email);
      user.username = real.username;
      user.email = real.email;

      user.$save().then(function(success) {
        console.log(success);
        real.username = null;
        real.email = null;
        real.password = null; 
        $state.go('profile');
      }, function(error) {
        console.log("there was an error! " + error);
      });
    }


    function login(validity){
      if (validity){
        // $log.log(real.email);
        // $log.log(real.password);
        Auth.$authWithPassword({
          email:real.email,
          password: real.password

        }).then(function(data){
          real.email = null;
          real.password = null;
          $state.go('profile');
        }).catch(function(error){
          var error = (JSON.stringify(error));
          showAlert(JSON.parse(error).code);
        })
      } else{
        real.showError = true;
        real.clearErrorMsg('showError');
      }
    }
  }
  angular.module('trelloApp')
    .controller('realTimeController',[
      '$scope',
      'Auth',
      '$state',
      '$timeout',
      '$log',
      '$mdDialog',
      'User',
      realTime
    ])

})()