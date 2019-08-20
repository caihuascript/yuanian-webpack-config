var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = new ForkTsCheckerWebpackPlugin({
	'tsconfig': require.resolve('@beisen/ts')
})