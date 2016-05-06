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

    $scope.removeExperience = function ($index) {
        $scope.subProfile.jobs.splice($index, 1);
        $scope.save();
    }

    $scope.removeTopSkill = function ($index) {
        $scope.subProfile.topSkills.splice($index, 1);
        $scope.save();
    }

    $scope.removeAnotherSkill = function ($index) {
        $scope.subProfile.anotherSkills.splice($index, 1);
        $scope.save();
    }

    $scope.removeEducation = function ($index) {
        $scope.subProfile.educations.splice($index, 1);
        $scope.save();
    }

    $scope.removeProject = function ($index) {
        $scope.subProfile.projects.splice($index, 1);
        $scope.save();
    }

    $scope.addJob = function() {
        $scope.subProfile.jobs.push($scope.newJob);
        $scope.save();
        $scope.newJob = null;
    }

    $scope.addTopSkill = function() {
        if ($scope.newSkill.point >= 100)
            $scope.newSkill.point = "99+";
        $scope.subProfile.topSkills.push($scope.newSkill);
        $scope.save();
        $scope.newSkill = null;
    }

    $scope.addAnotherSkill = function() {
        if ($scope.newSkill.point >= 100)
            $scope.newSkill.point = "99+";
        $scope.subProfile.anotherSkills.push($scope.newSkill);
        $scope.save();
        $scope.newSkill = null;
    }

    $scope.addEducation = function() {
        $scope.subProfile.educations.push($scope.newEducation);
        $scope.save();
        $scope.newEducation = null;
    }

    $scope.addProject = function() {
        $scope.subProfile.projects.push($scope.newProject);
        $scope.save();
        $scope.newProject = null;
    }
});