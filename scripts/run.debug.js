'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const apiServer = require('../src/api');
const port = 3000;

apiServer.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Microservice listening on port ${port}`);
  /* eslint-enable no-console */
});