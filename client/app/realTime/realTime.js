(function(){
  'use strict';
  var stockDogRoue = function($stateProvider){
    $stateProvider
      .state('realTime',{
        url: '/realTime',
        templateUrl:'app/realTime/realTime.html',
        controller: 'realTimeController',
        controllerAs: 'real'
      })
  }
  angular.module('trelloApp')
  .config(['$stateProvider',
    stockDogRoue
  ])
})();

// 'use strict';

// angular.module('trelloApp')
//   .config(function ($stateProvider) {
//     $stateProvider
//       .state('stockDog', {
//         url: '/stock',
//         templateUrl: 'app/stockDog/stock.html',
//         controller: 'StockDogCtrl',
//         controllerAs: 'stock'
//       });
//   });