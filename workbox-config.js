module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,css,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};