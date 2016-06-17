angular.module('portfolio.projects-services', [])

.factory('ProjectData', function() {
	var projects = [
		{
			name: 'OUI',
			url: 'https://github.com/optimizely/oui',
			tags: ['sass', 'ui', 'professional'],
			year: '2015-2016',
			description: 'An open source UI library, originally created for Optimizely apps',
			writeUp: false,
		},
		{
			name: 'Appception',
			url: 'appception',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'ui', 'personal'],
			year: '2014',
			description: 'A web app that creates web apps',
			writeUp: true,
		},
		{
			name: 'Inkling Store Product Details',
			url: 'inkling-product-details',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional'],
			year: '2014',
			description: 'A redesign of one of the core pages on the Inkling web store.',
			writeUp: true,
		},
		{
			name: 'New York Times Visual Search',
			url: 'https://github.com/kwalker3690/news-site',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'personal'],
			year: '2014',
			description: 'Hackathon project to create a photographic interface for New York Times articles',
			writeUp: false,
		},
		{
			name: 'Github Scout',
			url: 'github-scout',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'personal'],
			year: '2014',
			description: "An app to discover stats about you and your favorite languages' activities on Github.",
			writeUp: true,
		},
		{
			name: 'Inkling for Web Style Guide',
			url: 'inkling-style-guide',
			tags: ['ui', 'user testing', 'html', 'css', 'workflow', 'professional'],
			year: '2013-2014',
			description: "A mission to unify the visual styling across all of Inkling's web presences.",
			writeUp: true,
		}

	];

	return projects;
});
