var models = require('../models');

module.exports = {
  italy: {
    get: function (req, res) {
      models.italy.get(function(document) {
        res.status(200).send({results: document});
      });
    }, // a function which handles a get request for all documents
    post: function (req, res) {
      models.italy.post(req.body, function(){
        res.status(201).send('Document processed!');
      });
    } // a function which handles posting document data to the database
  },

  mexico: {
    get: function (req, res) {
      models.mexico.get(function(document) {
        res.status(200).send({results: document});
      });
    }, // a function which handles a get request for all documents
    post: function (req, res) {
      models.mexico.post(req.body, function(){
        res.status(201).send('Document processed!');
      });
    } // a function which handles posting document data to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(users) {
        res.status(200).send(users);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(){
        res.status(201).send('user created!');
      });
    }
  }
};

