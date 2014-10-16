angular.module('portfolio', [
	'portfolio.home',
	'portfolio.projects',
	'portfolio.directives',
	'ui.router'
	])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home/home.html',
				controller: 'HomeController'
			})
			.state('project', {
				url: '/project/:projectUrl',
				templateUrl: 'project/project.html',
				controller: 'ProjectController'
			});

		$urlRouterProvider.otherwise('/');

		console.log('im getting activated')
	})

	.run(function ($rootScope, $window) {
    // Fix UI router scrolling issue
    $rootScope.$on('$viewContentLoaded', function () {
      window.scrollTo(0, 0);
    });
  });