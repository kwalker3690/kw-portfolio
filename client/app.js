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
				url: '/project',
				templateUrl: 'project/project.html',
				controller: 'ProjectController'
			});

		$urlRouterProvider.otherwise('/');

		console.log('im getting activated')
	});