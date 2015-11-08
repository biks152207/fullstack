(function(){
  'use strict';
  var dataService = function(){
    var stories = [
      {
            title: 'Realtime Event Bus with Firebase and Angular',
            description: 'Our first story.',
            criteria: 'Criteria pending.',
            status: 'To Do',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford',
            route: '/realTime'
        }
    ];
    this.getStories = function(){
      return stories;
    };
  };
  angular.module('trelloApp')
  .service('dataServices',[
    dataService
  ]);
})();