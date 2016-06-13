angular.module('portfolio.projects')

	.controller('GithubScoutController', function ($scope, ProjectData, Lightbox) {

		// Get project info
		ProjectData.forEach(function (value, index) {
			if(value.url === 'github-scout') {
				$scope.projectInfo = value;
			}
		});

		$scope.user = [
			{
				'url': 'project/projectTemplates/github-scout/images/user-graph-full.jpg',
				'thumbUrl': 'project/projectTemplates/github-scout/images/user-graph-thumb.jpg'
			}
		];

		$scope.language = [
			{
				'url': 'project/projectTemplates/github-scout/images/lang-graph-full.jpg',
				'thumbUrl': 'project/projectTemplates/github-scout/images/lang-graph-thumb.jpg'
			}
		];

		$scope.openLightboxModal = function(groupname, index) {
			Lightbox.openModal($scope[groupname], index);
		};
	});
