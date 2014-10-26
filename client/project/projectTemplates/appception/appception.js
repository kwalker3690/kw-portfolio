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

		$scope.recursive = [
			{
				'url': 'project/projectTemplates/appception/images/finder-file-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/finder-file-thumb.jpg',
				'caption': 'The file structure as seen in Finder.',
				'shortCaption': 'The file structure as seen in Finder.'
			},
			{
				'url': 'project/projectTemplates/appception/images/directive-1-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/directive-1-thumb.jpg',
				'caption': 'The outer directive to create unordered lists.',
				'shortCaption': 'The outer directive to create unordered lists.'
			},
			{
				'url': 'project/projectTemplates/appception/images/directive-2-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/directive-2-thumb.jpg',
				'caption': 'The inner directive that does the bulk of the work. It checks to see if the input provided has children. If it does, it creates a new unordered list as a list item using the outer directive. If not, it adds a plain list item to the current unordered list.',
				'shortCaption': 'The inner directive that does the bulk of the work. . .'
			},
			{
				'url': 'project/projectTemplates/appception/images/final-file-full.jpg',
				'thumbUrl': 'project/projectTemplates/appception/images/final-file-thumb.jpg',
				'caption': 'The resulting output, in rendered HTML and CSS.',
				'shortCaption': 'The resulting output, in rendered HTML and CSS.'
			}
		];




		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
