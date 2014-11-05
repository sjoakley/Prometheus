'use strict';

function LaunchCtrl($scope, $http, $log, $location, $routeParams) {
  $scope.results = [];

  $scope.launchTest = function() {
    $scope.formSubmitted = true;
    $scope.results = [];

    var postData = {
      adminAccessToken: this.adminAccessToken
    };

    if (this.instances) {
      postData['instances'] = this.instances;
    }

    if (this.data) {
      postData['data'] = this.data;
    }

    $http.post('/api/test', postData)
      .success(function (data) {
        data = angular.fromJson(data);
        $scope.results = data;
        $log.info($scope.results);
      })
      .error(function (data, status, headers, config) {
        $log.info("Error: " + status);
        $log.info(data);
      });
  };

  $scope.prettyJSON = function(data) {
    return JSON.stringify(data, undefined, 2);
  };
}
