const config = {};

const isDevelopment = process.env.NODE_ENV === 'development';

config.PORT = process.env.PORT || 5000;
config.API_VERSION = process.env.API_VERSION || '/v1';
config.NODE_ENV = process.env.NODE_ENV;
config.DB_STRING = process.env.DB_STRING; // ✅ Always use actual env DB string
config.SECREATE = process.env.SECREATE;

module.exports = { config };
