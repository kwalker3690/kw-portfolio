angular.module('portfolio.projects')

	.controller('InklingStyleGuideController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'inkling-style-guide') {
				$scope.projectInfo = value;
			}
		})

		$scope.disparateStyles = [

			{
				'url': 'project/projectTemplates/inkling-style-guide/images/open-inkling-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/open-inkling-thumb.jpg'
			},
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/inkling-web-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/inkling-web-thumb.jpg'
			},
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/chapter-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/chapter-thumb.jpg'
			},
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/reader-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/reader-thumb.jpg'
			}
		];

		$scope.buttons = [
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/buttons-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/buttons-thumb.jpg'
			}
		];

		$scope.dropbox = [
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/form-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/form-thumb.jpg'
			},
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/text-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/text-thumb.jpg'
			}
		];

		$scope.final = [
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/homepage-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/homepage-thumb.jpg'
			},
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/reader-final-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/reader-final-thumb.jpg'
			},
			{
				'url': 'project/projectTemplates/inkling-style-guide/images/open-inkling-final-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-style-guide/images/open-inkling-final-thumb.jpg'
			}
		];




		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
