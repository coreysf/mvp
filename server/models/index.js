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

          queryString += "INSERT INTO it_passport (type, country_code, passport_no, surnames, \
                          given_names, nationality, dob, gender, place_of_birth, date_of_issue, \
                          authority, date_of_expiration, footer1, footer2, userId) VALUES ( \
                          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
          queryArgs.push(data.type, data.country_code, data.passport_no, data.surnames, 
            data.given_names, data.nationality, data.dob, data.gender, data.place_of_birth, 
            data.date_of_issue, data.authority, data.date_of_expiration, data.footer1, data.footer2, 
            data.userId);

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

  mexico: {
    // a function which produces a single translation record
    get: function (callback) {
      var queryString = "SELECT type, country_code, passport_no, surnames, given_names, \
                        nationality, curp, dob, gender, place_of_birth, date_of_issue, \
                        date_of_expiration, authority, remarks, footer1, footer2 FROM mx_passport \
                        WHERE surnames = 'Buschiazzo';";
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
      // var queryString = "INSERT INTO mx_passport (type, country_code, passport_no, surnames, \
      //                     given_names, nationality, curp, dob, gender, place_of_birth, date_of_issue, \
      //                     date_of_expiration, authority, remarks, footer1, footer2) VALUES ( \
      //                     ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

      var queryString = "INSERT INTO mx_passport (type, country_code, passport_no, surnames, \
        given_names, nationality, curp, dob, gender, place_of_birth, date_of_issue, \
        date_of_expiration, authority, remarks, footer1, footer2) VALUES ( ?, ?, ?, ?, ?, \
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

      // THIS WORKS IN TERMINAL: var queryString = "INSERT INTO mx_passport (type, country_code, passport_no, surnames, given_names, nationality, curp, dob, gender, place_of_birth, date_of_issue, date_of_expiration, authority, remarks, footer1, footer2) VALUES ( 'T', 'it', 34234, 'Roy', 'Corey', 'American', '3rsf', 'May1', 'm', 'New Orleans', 'May1', 'May1', 'dsdf', 'remarks', 'sdfs', 'sdfds');";

      // var queryString = "INSERT INTO mx_passport (type, issuing_country_code, passport_no, surnames, given_names, nationality, curp, dob, gender, place_of_birth, date_of_issue, date_of_expiration, authority, remarks, footer1, footer2, userId) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

      var queryArgs = [data.documenttype, data.countryCode, data.passportNo, data.surnames, 
      data.givenNames, data.nationality, data.curp, data.dob, data.gender, data.placeOfBirth, 
      data.issueDate, data.expirationDate, data.authority, data.remarks, data.footer1, data.footer2];
      

      console.log("queryArgs: " + queryArgs);

      db.query(queryString, queryArgs, function(err, results){
        if(err){
          console.log("Database post error: " + err);
        } else if (callback) {
          callback();
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = "SELECT username FROM users";
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
      var queryString = "INSERT INTO users (username, password) VALUES (?, ?)";
      var queryArgs = [data.username, data.password];
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

