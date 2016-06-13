angular.module('portfolio.projects')

	.controller('InklingProductDetailsController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'inkling-product-details') {
				$scope.projectInfo = value;
			}
		});

		$scope.wireframe = [
			{
				'url': 'project/projectTemplates/inkling-product-details/images/wireframe-full.png',
				'thumbUrl': 'project/projectTemplates/inkling-product-details/images/wireframe-thumb.jpg'
			}
		];

		$scope.twoOptions = [

			{
				'url': 'project/projectTemplates/inkling-product-details/images/two-options.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-product-details/images/two-options.jpg'
			}
		];

		$scope.components = [

			{
				'url': 'project/projectTemplates/inkling-product-details/images/components.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-product-details/images/components.jpg'
			}
		];


		$scope.sampling = [
			{
				'url': 'project/projectTemplates/inkling-product-details/images/content-sampling.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-product-details/images/content-sampling.jpg'
			}
		];

		$scope.final = [
			{
				'url': 'project/projectTemplates/inkling-product-details/images/final.jpg',
				'thumbUrl': 'project/projectTemplates/inkling-product-details/images/final.jpg'
			}
		];

		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index);
		};
	});
