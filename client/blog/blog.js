angular.module('portfolio.blog', [
	'portfolio.blog-services'
	])

.controller('BlogController', ['$scope', 'BlogData', function ($scope, BlogData) {
	$scope.blogPosts = BlogData
}])