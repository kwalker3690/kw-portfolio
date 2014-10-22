angular.module('portfolio.projects', [
	'portfolio.projects-services',
	'bootstrapLightbox'])

.controller('ProjectController', ['$scope', '$stateParams', 'ProjectData', function ($scope, $stateParams, ProjectData) {
	$scope.projects = ProjectData;

	$scope.template = {
		url: $stateParams.projectUrl,
		name: ''
	}

	// This function sets up pagination
	// Get name of project for breadcrumb
	ProjectData.forEach(function(value, index, array) {
		if($stateParams.projectUrl === value.url) {
			$scope.template.name = value.name;

			// If there is a previous project, set the url and name for pagination
			if(array[index+1]) {
				$scope.previousProject = {
					url: array[index+1].url,
					name: array[index+1].name
				};
			// otherwise hide the previous pagination
			} else {
				$scope.previousProject = false
			}

			// Same as above but for next project
			if(array[index-1]) {
				$scope.nextProject = {
					url: array[index-1].url,
					name: array[index-1].name
				}
			} else {
				$scope.nextProject = false
			}

		}
	})

}])