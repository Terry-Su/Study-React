var path = require('path');

module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel-loader',
				query: {
					    presets: ['es2015', 'react']					
					}
			}
		]
	}
}