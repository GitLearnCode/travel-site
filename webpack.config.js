module.exports = {
	entry: "./app/assets/js/app.js",
	output: {
		path: "./app/temp/js",
		filename: "app.js"
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
