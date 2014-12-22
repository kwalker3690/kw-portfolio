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
				'url': 'project/projectTemplates/inkling-elsevier-migration/images/flow.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-elsevier-migration/images/flow.jpg'
			}
		];

		$scope.password = [

			{
				'url': 'project/projectTemplates/inkling-elsevier-migration/images/password.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-elsevier-migration/images/password.jpg'
			}
		];

		$scope.migration = [

			{
				'url': 'project/projectTemplates/inkling-elsevier-migration/images/migration.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-elsevier-migration/images/migration.jpg'
			}
		];


		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
