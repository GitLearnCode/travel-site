module.exports = {
	entry: {
		App: "./app/assets/js/app.js",
		Vendor: "./app/assets/js/vendor.js"
	},
	output: {
		path: "./app/temp/js",
		filename: "[name].js"// create a file for eache entry file with the same name.
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}
