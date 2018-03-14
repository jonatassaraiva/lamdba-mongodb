'use strict';

//
// external modules
const mongoose = require('mongoose');
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// api
const api = require('./src/api');
api.use(awsServerlessExpressMiddleware.eventContext());

const apiServer = awsServerlessExpress.createServer(api);

module.exports.microservice = (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { poolSize: 2 });
    console.log('mongoose.connection.readyState === 0');
  }

  return awsServerlessExpress.proxy(apiServer, event, context)
};