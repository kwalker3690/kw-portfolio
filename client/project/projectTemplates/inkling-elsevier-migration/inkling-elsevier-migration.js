angular.module('portfolio.projects')

	.controller('InklingElsevierMigrationController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'inkling-elsevier-migration') {
				$scope.projectInfo = value;
			}
		})

		$scope.flow = [

			{
				'url': 'project/projectTemplates/inkling-elsevier-migration/images/flow-full.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-elsevier-migration/images/flow-thumb.jpg'
			}
		];

		$scope.language = [
			{
				'url': 'project/projectTemplates/github-scout/images/lang-graph-full.jpg',
				'thumbUrl': 'project/projectTemplates/github-scout/images/lang-graph-thumb.jpg'
			}
		];


		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
