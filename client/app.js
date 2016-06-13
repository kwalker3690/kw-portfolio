angular.module('portfolio', [
	'portfolio.home',
	'portfolio.projects',
	'portfolio.project-templates',
	'portfolio.directives',
	'portfolio.blog',
	'portfolio.blog-templates',
	'portfolio.about',
	'ui.router'
	])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'project/projects.html',
				controller: 'ProjectsController'
			})
			.state('project', {
				url: '/project/:projectUrl',
				templateUrl: 'project/project-template-wrapper.html',
				controller: 'ProjectTemplatesController'
			})

		$urlRouterProvider.otherwise('/');
	})

	.run(function ($rootScope, $window) {
    // Fix UI router scrolling issue
    $rootScope.$on('$viewContentLoaded', function () {
      window.scrollTo(0, 0);
    });
  });
