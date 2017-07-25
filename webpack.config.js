module.exports = {
	entry: ["whatwg-fetch", __dirname + "/index.js"],

	output: {
		filename: "bundle.js",
		path: __dirname + "/build"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},

			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader!postcss-loader"
			},

			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: "url-loader"
			}
		]
	},

	devServer: {
		contentBase: __dirname + "/build",
		port: 8080
	}
}