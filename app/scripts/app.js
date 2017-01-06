'use strict';

/**
 * @ngdoc overview
 * @name honeybookApp
 * @description
 * # honeybookApp
 *
 * Main module of the application.
 */
angular
  .module('honeybookApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ContactCtrl',
        controllerAs: 'contacts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });