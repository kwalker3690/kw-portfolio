angular.module('portfolio.home', [
	])

.controller('HomeController', ['$scope', 'ProjectData', function ($scope, ProjectData) {
	$scope.projects = ProjectData
}])