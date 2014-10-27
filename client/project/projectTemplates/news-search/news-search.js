angular.module('portfolio.projects')

	.controller('NewsSearchController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'news-search') {
				$scope.projectInfo = value;
			}
		})

		$scope.images = [
			{
				'url': 'project/projectTemplates/news-search/images/news1.jpg',
				'thumbUrl': 'project/projectTemplates/news-search/images/news1.jpg'
			},
			{
				'url': 'project/projectTemplates/news-search/images/news2.jpg',
				'thumbUrl': 'project/projectTemplates/news-search/images/news2.jpg'
			}
		];

		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index)
		}
	})
