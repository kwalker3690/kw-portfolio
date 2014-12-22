angular.module('portfolio.projects')

	.controller('InklingElsevierController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'inkling-elsevier-whitelabel') {
				$scope.projectInfo = value;
			}
		})

		$scope.final = [
			{
				'url': 'project/projectTemplates/inkling-elsevier-whitelabel/images/final.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-elsevier-whitelabel/images/final.jpg'
			}
		];

		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
