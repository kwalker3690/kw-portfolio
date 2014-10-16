angular.module('portfolio.projects-services', [])

.factory('ProjectData', function() {
	var projects = [
		{
			name: 'Appception',
			url: 'Appception',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'ui', 'personal']
		},
		{
			name: 'Tate Art Explorer',
			url: 'tate-art-explorer',
			tags: ['javascript', 'angular', 'node', 'ionic', 'html', 'css', 'sass', 'personal']
		},
		{
			name: 'Github Scout',
			url: 'github-scout',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'personal']
		},
		{
			name: 'New York Times Visual Search',
			url: 'news-search',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'personal']
		},
		{
			name: 'Wedding Website',
			url: 'sally-joey-wedding',
			tags: ['ux', 'ui', 'html', 'css', 'sass', 'personal']
		},
		{
			name: "Inkling's Whitelabeled Store for Elsevier",
			url: 'inkling-elsevier-whitelabel',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional']
		},
		{
			name: "Migration of Elsevier Users to Inkling",
			url: 'inkling-elsevier-migration',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional']
		},
		{
			name: 'Inkling Store Product Details',
			url: 'inkling-product-details',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional']
		},
		{
			name: 'Inkling for Web Style Guide',
			url: 'inkling-style-guide',
			tags: ['ui', 'user testing', 'html', 'css', 'workflow', 'professional']
		}

	];

	return projects;
})