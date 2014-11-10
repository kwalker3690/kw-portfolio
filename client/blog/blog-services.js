angular.module('portfolio.blog-services', [])

.factory('BlogData', function() {
	var blogPosts = [
		{
			name: 'Setting Up Sass Files',
			url: 'sass-file-setup',
			date: 'September 23, 2014',
			snippet: 'Sass is an amazing CSS preprocessor. It lets you write CSS quickly and in an amazingly modular fashion. It helps you cut down the amount of CSS you have to write by letting you make variables and even functions to come up with reusable CSS. . .'
		},
		{
			name: 'How to Make S*** Look Cool in 30 seconds',
			url: 'cool-in-30-part-1',
			date: 'September 2, 2014',
			snippet: 'In this first entry in the "How to Make S*** Look Cool in 30 seconds" series, we are going to talk about full-bleed, blurred background images. This technique is so hot in web design right now, and is a super simple way to make your project look snappy. . .'
		}

	];

	return blogPosts;
})