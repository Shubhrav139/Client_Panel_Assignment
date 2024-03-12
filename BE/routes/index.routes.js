const Router = require('express').Router();

Router.use('/client', require('./clientRoutes'));

module.exports = Router;
