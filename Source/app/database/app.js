var linkedInApp = angular.module('LinkedInApp', ['ngSanitize']);

linkedInApp.controller('HoSoCaNhan', function ($scope, $http) {
	$http.get('./database/data.json').success(function(data) {
        $scope.profile = data;
    });
});