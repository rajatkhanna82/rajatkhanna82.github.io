'use strict';

angular.module('ishaEvents', [
   'ui.bootstrap',
   'ngTouch',
   'ngAnimate',
   'ui.router'])
   .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
      $urlRouterProvider.when('', '/events');
      $urlRouterProvider.when('/', '/events');

      $stateProvider
         .state('events', {
            url: '/events',
            templateUrl: '/events/events.html',
            controller: 'EventsController',
            controllerAs: 'events'
         });
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
   });
