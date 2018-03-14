'use strict';

//
// external modules
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
//
// internal modules
const todoController = require('./controller');

//
// config express
const server = express();
// for parsing application/json
server.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
const formDataParser = multer();
server.use(formDataParser.array());
// cors
server.use(cors());

//
// routes
server.get('/todos', todoController.getAll);
server.post('/todos', todoController.create);

//
// exposed server
module.exports = server;