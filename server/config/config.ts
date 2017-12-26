const baseConfig = require('./base.config');
const envName = process.env.NODE_ENV || 'development';

const envConfig = require(`./${envName}.config`);

const combinedConfig = Object.assign({}, baseConfig, envConfig);
export default combinedConfig;
