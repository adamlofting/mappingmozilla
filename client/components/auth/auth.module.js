'use strict';

angular.module('mappingmozillaApp.auth', [
  'mappingmozillaApp.constants',
  'mappingmozillaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
