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
				templateUrl: 'home/home.html',
				controller: 'HomeController'
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'project/projects.html',
				controller: 'ProjectsController'
			})
			.state('project', {
				url: '/project/:projectUrl',
				templateUrl: 'project/project-template-wrapper.html',
				controller: 'ProjectTemplatesController'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: 'blog/blog.html',
				controller: 'BlogController'
			})
			.state('blogPost', {
				url: '/blog/:blogPostUrl',
				templateUrl: 'blog/blog-template-wrapper.html',
				controller: 'BlogTemplatesController'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'about/about.html',
				controller: 'AboutController'
			})

		$urlRouterProvider.otherwise('/');

		console.log('im getting activated')
	})

	.run(function ($rootScope, $window) {
    // Fix UI router scrolling issue
    $rootScope.$on('$viewContentLoaded', function () {
      window.scrollTo(0, 0);
    });
  });