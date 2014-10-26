angular.module('portfolio.projects')

	.controller('TateArtController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'tate-art-explorer') {
				$scope.projectInfo = value;
			}
		})

		$scope.images = [

			{
				'url': 'project/projectTemplates/tate-art-explorer/images/browse-full.jpg',
				'thumbUrl': 'project/projectTemplates/tate-art-explorer/images/browse-thumb.jpg'
			},
			{
				'url': 'project/projectTemplates/tate-art-explorer/images/autocomplete-full.jpg',
				'thumbUrl': 'project/projectTemplates/tate-art-explorer/images/autocomplete-thumb.jpg'
			}

		];




		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
