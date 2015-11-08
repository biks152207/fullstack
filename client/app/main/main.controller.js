(function(){
 'use strict';
 
   var MainFunc = function($location,dataServices){
    var main = this;
    main.lists = dataServices.getStories();
   };


   angular.module('trelloApp')
   .controller('MainCtrl', [
      '$location',
      'dataServices',
      MainFunc
    ]);

})();