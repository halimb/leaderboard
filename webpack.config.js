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
				test: /\.png$/,
				exclude: /node_modules/,
				loader: "url-loader?name=img/[name].[ext]"
			},

			{
				test: /\.ttf$/,
				loader: "file-loader"
			}
		]
	},

	devServer: {
		contentBase: __dirname + "/build",
		port: 3000
	}
}