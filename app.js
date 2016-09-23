'use strict';

angular.module('ishaEvents', [
   'ui.bootstrap',
   'ngTouch',
   'ngAnimate',
   'ui.router'])
   .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('', '/events');
      $urlRouterProvider.when('/', '/events');

      $stateProvider
         .state('events', {
            url: '/events',
            template: '/events/event.html',
            controller: 'EventsController',
            controllerAs: 'events'
         });
   });
