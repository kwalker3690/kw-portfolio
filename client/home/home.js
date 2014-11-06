angular.module('portfolio.home', [
	'angular-carousel'
	])

.controller('HomeController', ['$scope', 'ProjectData', 'BlogData', function ($scope, ProjectData, BlogData) {
	$scope.projects = ProjectData;
	$scope.blogPosts = BlogData
}])