'use strict';

angular.module('mappingmozillaApp', [
  'mappingmozillaApp.auth',
  'mappingmozillaApp.admin',
  'mappingmozillaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
