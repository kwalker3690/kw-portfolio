angular.module('portfolio.projects-services', [])

.factory('ProjectData', function() {
	var projects = [
		{
			name: 'Art Safari',
			tags: ['javascript', 'angular', 'node', 'ionic', 'html', 'css', 'sass', 'personal']
		},
		{
			name: 'Github Scout',
			tags: ['javascript', 'angular', 'node', 'express', 'html', 'css', 'sass', 'personal']
		},
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