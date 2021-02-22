const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
};
