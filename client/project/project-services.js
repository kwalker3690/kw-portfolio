angular.module('portfolio.projects-services', [])

.factory('ProjectData', function() {
	var projects = [
		{
			name: 'Inkling Store Product Details',
			tags: ['ux', 'ui', 'user testing', 'html', 'css', 'sass', 'professional']
		},
		{
			name: 'Inkling for Web Style Guide',
			tags: ['ui', 'user testing', 'html', 'css', 'workflow', 'professional']
		}

	];

	return projects;
})