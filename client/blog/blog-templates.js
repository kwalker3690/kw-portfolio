angular.module('portfolio.blog-templates', [
	'portfolio.blog-services'
	])

.controller('BlogTemplatesController', ['$scope', '$stateParams', 'BlogData', function ($scope, $stateParams, BlogData) {
	$scope.blogPosts = BlogData;

	$scope.template = {
		url: $stateParams.blogPostUrl,
		name: ''
	}

	// This function sets up pagination
	// Get name of project for breadcrumb
	BlogData.forEach(function(value, index, array) {
		if($stateParams.blogPostUrl === value.url) {
			$scope.template.name = value.name;

			// If there is a previous Blog, set the url and name for pagination
			if(array[index+1]) {
				$scope.previousBlogPost = {
					url: array[index+1].url,
					name: array[index+1].name
				};
			// otherwise hide the previous pagination
			} else {
				$scope.previousBlogPost = false
			}

			// Same as above but for next Blog
			if(array[index-1]) {
				$scope.nextBlogPost = {
					url: array[index-1].url,
					name: array[index-1].name
				}
			} else {
				$scope.nextBlogPost = false
			}

		}
	})

}])