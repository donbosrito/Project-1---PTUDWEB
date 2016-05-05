var linkedInApp = angular.module('LinkedInApp', ['ngSanitize']);

linkedInApp.controller('profile', function ($scope, $http) {
    $scope.subProfile;
	$http.get('./database/data.json').success(function(data) {
        $scope.profile = data;
        $scope.subProfile = angular.copy($scope.profile);
    });


    $scope.getSelectedJob = function ($index) {
        $scope.selectedJob = $scope.subProfile.jobs[$index];
    }

    $scope.getSelectedProject = function ($index) {
        $scope.selectedProject = $scope.subProfile.projects[$index];
    }

    $scope.getSelectedTopSkill = function ($index) {
        $scope.selectedTopSkill = $scope.subProfile.topSkills[$index];
    }

    $scope.getSelectedAnotherSkill = function ($index) {
        $scope.selectedAnotherSkill = $scope.subProfile.anotherSkills[$index];
    }

    $scope.getSelectedEducation = function ($index) {
        $scope.selectedEducation = $scope.subProfile.educations[$index];
    }

    $scope.save = function () {
        $scope.profile = angular.copy($scope.subProfile);
    }

    $scope.reset = function () {
        $scope.subProfile = angular.copy($scope.profile);
    }

    $scope.saveTopSkill = function () {
        if ($scope.selectedTopSkill.point >= 100)
            $scope.selectedTopSkill.point = "99+";
        $scope.save();
    }

    $scope.saveAnotherSkill = function () {
        if ($scope.selectedAnotherSkill.point >= 100)
            $scope.selectedAnotherSkill.point = "99+";
        $scope.save();
    }
});