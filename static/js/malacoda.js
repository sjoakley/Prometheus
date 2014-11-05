'use strict';


// Declare app level module which depends on filters, and services
angular.module('Malacoda', ['Malacoda.filters', 'Malacoda.services', 'Malacoda.directives', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/splash.html', controller: 'LaunchCtrl'});
    $routeProvider.when('/instances', {templateUrl: 'partials/instances.html', controller: 'InstanceCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
