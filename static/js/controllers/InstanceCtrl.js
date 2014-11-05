'use strict';

function InstanceCtrl($scope, $http, $log, $location, $routeParams) {
  $scope.instances = [];

  $http.get('/api/instance')
    .success(function (data) {
      data = angular.fromJson(data);
      $scope.instances = data.Instances;
      $log.info($scope.instances);
    })
    .error(function (data, status, headers, config) {
      $log.info("Error: " + status);
      $log.info(data);
    });
}
