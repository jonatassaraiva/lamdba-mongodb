'use strict';

const TodoListModel = require('./model');

module.exports = {
  getAll(req, res) {
    const userId = req.headers['x-user-id'];
    TodoListModel.find({ userId }, (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.json(result);
    });
  },

  create(req, res) {
    const { text } = req.body;
    const userId = req.headers['x-user-id'];
    const todo = {
      text,
      userId
    };

    TodoListModel.create(todo, (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.json(result);
    });
  }
};