const developmentConfig = require('./webpack.dev');
const productionConfig = require('./webpack.prod');

module.exports = env => {
  return env === 'development' ? developmentConfig : productionConfig;
};
