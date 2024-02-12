const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	devtool: 'source-map',
	mode: "production",
	entry: {
		"style": "./style-root.css",
	},
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: { sourceMap: true },
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
							postcssOptions: {
								plugins: [
									require("cssnano")(),
								],
							},
						},
					},
				],
			},
		],
	},
};
