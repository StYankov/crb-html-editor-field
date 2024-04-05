module.exports = {
	presets: [
		[ '@babel/preset-env', {
			modules: false
		} ],
		'@babel/preset-react'
	],
	plugins: [
		'@babel/plugin-syntax-async-generators',
		'@babel/plugin-transform-runtime'
	],
	env: {
		production: {
			plugins: [
				[ '@wordpress/babel-plugin-makepot', {
					output: 'languages/carbon-fields-YOURFIELDNAME.pot'
				} ]
			]
		}
	}
};
