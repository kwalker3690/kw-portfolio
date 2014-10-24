angular.module('portfolio.projects-services', [])

.factory('ProjectData', function() {
	var projects = [
		{
			name: 'Appception',
			url: 'appception',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'ui', 'personal'],
			year: '2014',
			description: 'A web app that creates web apps'
		},
		{
			name: 'Tate Art Explorer',
			url: 'tate-art-explorer',
			tags: ['javascript', 'angular', 'node', 'ionic', 'html', 'css', 'sass', 'personal'],
			year: '2014',
			description: 'Browse the Tate Art Collection with ease.'
		},
		{
			name: 'Github Scout',
			url: 'github-scout',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'personal'],
			year: '2014',
			description: "Find out details about you and your favorite languages' activities on Github."
		},
		{
			name: 'New York Times Visual Search',
			url: 'news-search',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'personal'],
			year: '2014',
			description: 'Search the news with an easy to use visual interface.'
		},
		{
			name: 'Wedding Website',
			url: 'sally-joey-wedding',
			tags: ['ux', 'ui', 'html', 'css', 'sass', 'personal'],
			year: '2014',
			description: "A responsive website designed and coded for dear friends' wedding."
		},
		{
			name: "Migration of Elsevier Users to Inkling",
			url: 'inkling-elsevier-migration',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional'],
			year: '2013-2014',
			description: 'A UX and UI flow to move over a million users to a new platform.'
		},
		{
			name: "Inkling's Whitelabeled Store for Elsevier",
			url: 'inkling-elsevier-whitelabel',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional'],
			year: '2013-2014',
			description: 'A cobranded experience between an international textbook company and a smartly designed eBook product.'
		},
		{
			name: 'Inkling Store Product Details',
			url: 'inkling-product-details',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional'],
			year: '2014',
			description: 'A redesign of one of the core pages on the Inkling web store.'
		},
		{
			name: 'Inkling for Web Style Guide',
			url: 'inkling-style-guide',
			tags: ['ui', 'user testing', 'html', 'css', 'workflow', 'professional'],
			year: '2013-2014',
			description: "A mission to unify the visual styling across all of Inkling's web presences."
		}

	];

	return projects;
})