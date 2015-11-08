(function(){
 'use strict';
 
   var MainFunc = function($location,dataServices){
    var main = this;
    main.lists = dataServices.getStories()
   }

   var NestedFunc = function(){
    var nest = this;
    nest.name ="bikram";
   }

   angular.module('trelloApp')
   .controller('MainCtrl', MainFunc)
   .controller('NestedCtrl', NestedFunc)
   MainFunc.$inject = ['$location', 'dataServices'];

})()