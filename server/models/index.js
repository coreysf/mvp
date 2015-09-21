var db = require('../db');

module.exports = {
  // messages: {            // LOOK INTO HOW THIS IS CALLED!!
  italy: {
    // a function which produces a single translation record
    get: function (callback) {
      var queryString = "SELECT i.type AS type, i.country_code AS code, i.passport_no AS no, \
                        i.surnames AS surnames, i.given_names AS names, i.nationality AS nationality, \
                        i.dob AS dob, i.gender AS gender, i.place_of_birth AS place_of_birth, \
                        i.date_of_issue AS date_of_issue, i.authority AS authority, i.date_of_expiration AS expiration, \
                        i.footer1 AS footer1, i.footer2 AS footer2 \
                        FROM it_passport i JOIN users u ON (i.userID=u.id);";
      var queryArgs = [];

      db.query(queryString, queryArgs, function(err, results){
        if(err){
          console.log(err);
        } else {
          callback(results);
        }
      });
    }, 
    // a function which can be used to insert document data into the database
    post: function (data, callback) {
      var queryString = "SELECT id AS userId FROM users WHERE username = ?;";
      var queryArgs = [data.username];
      db.query(queryString, queryArgs, function(err, results){
        if(err){
          console.log(err);
        } else {
          var userId = results[0][0] ? results[0][0].userId : undefined;   // DOUBLE CHECK!!

          var queryString = "";
          var queryArgs = [];

          if (userId === undefined) {
            queryString += "INSERT INTO users (username) VALUES (?);";
            queryArgs.push(data.username);                              // DOUBLE CHECK!!
          }

          queryString += "INSERT INTO it_passport (user, room, message) VALUES ( \
            (SELECT u.id FROM users u WHERE u.name = ?), (SELECT r.id FROM rooms r WHERE r.name = ?), ?)";
          queryArgs.push(data.username, data.roomname, data.text);

          db.query(queryString, queryArgs, function(err, results) {
            if(err) {
              console.log(err);
            } else if (callback) {
              callback();
            }
          });
        }

      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = "SELECT name AS username FROM users";
      var queryArgs = [];

      db.query(queryString, queryArgs, function(err, results){
        if(err){
          console.log(err);
        } else {
          callback(results);
        }
      });
    },
    post: function (data, callback) {
      var queryString = "INSERT INTO users (name) VALUES (?)";
      var queryArgs = [data.username];
      db.query(queryString, queryArgs, function(err, results){
        if(err){
          console.log(err);
        } else if (callback){
          callback();
        }
      })
    }
  },

  rooms: {
    // Ditto as above.
    get: function (callback) {
      var queryString = "SELECT name AS roomname FROM rooms";
      var queryArgs = [];

      db.query(queryString, queryArgs, function(err, results){
        if(err){
          console.log(err);
        } else {
          callback(results);
        }
      });
    },
    post: function (data, callback) {
      var queryString = "INSERT INTO rooms (name) VALUES (?)";
      var queryArgs = [data.roomname];
      db.query(queryString, queryArgs, function(err, results){
        if(err){
          console.log(err);
        } else if (callback){
          callback();
        }
      })
    }
  }
};

