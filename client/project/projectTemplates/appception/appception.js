angular.module('portfolio.projects')

	.controller('AppceptionController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'appception') {
				$scope.projectInfo = value;
			}
		})

		$scope.projects = [

			{
				'url': 'project/projectTemplates/appception/images/projects-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/projects-thumb.jpg'
			}
		];

		$scope.newProject = [
			{
				'url': 'project/projectTemplates/appception/images/new-project-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/new-project-thumb.jpg'
			}
		];

		$scope.fileEditor = [
			{
				'url': 'project/projectTemplates/appception/images/file-editor-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/file-editor-thumb.jpg'
			}
		];

		$scope.node = [
			{
				'url': 'project/projectTemplates/appception/images/node-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/node-thumb.jpg'
			}
		];




		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
