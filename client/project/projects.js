angular.module('portfolio.projects', [
	'portfolio.projects-services'])

.controller('ProjectController', ['$scope', '$stateParams', 'ProjectData', function ($scope, $stateParams, ProjectData) {
	$scope.projects = ProjectData;

	$scope.template = {
		url: $stateParams.projectUrl,
		name: ''
	}

	// Get name of project for breadcrumb
	ProjectData.forEach(function(value, index) {
		if($stateParams.projectUrl === value.url) {
			$scope.template.name = value.name
		}
	})

}])