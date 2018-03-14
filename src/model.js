'use strict';

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: String,
  completed: { type: Boolean, default: false },
  userId: String
}, {
    versionKey: false,
    timestamps: true
  });

module.exports = mongoose.model('todo', TodoSchema);