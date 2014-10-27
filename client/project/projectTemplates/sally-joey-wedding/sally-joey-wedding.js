angular.module('portfolio.projects')

	.controller('SallyJoeyController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'sally-joey-wedding') {
				$scope.projectInfo = value;
			}
		})

		$scope.desktop = [
			{
				'url': 'project/projectTemplates/sally-joey-wedding/images/desktop-full.jpg',
				'thumbUrl': 'project/projectTemplates/sally-joey-wedding/images/desktop-thumb.jpg'
			}
		];
		$scope.mobile = [
			{
				'url': 'project/projectTemplates/sally-joey-wedding/images/mobile-full.jpg',
				'thumbUrl': 'project/projectTemplates/sally-joey-wedding/images/mobile-thumb.jpg'
			}
		];

		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
