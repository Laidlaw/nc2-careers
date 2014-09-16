'use strict';

angular.module('nc2Careers')
  .controller('MainCtrl', function ($scope, $http) {
    $http.jsonp('https://www.jobscore.com/jobs/nc2media/feed.json?callback=JSON_CALLBACK')
      .success(function (data) {
        $scope.jobs = data.jobs;
      });

    angular.forEach($scope.jobs, function(job) {
      job.rank = Math.random();
    });
  });
