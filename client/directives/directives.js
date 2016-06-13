angular.module('portfolio.directives', [])

.directive('linearBlur', function() {
	return {
		restrict: 'E',
		scope: {
			image: '=image',
		},
		templateUrl: 'directives/linear-blur.html',
	};
});
