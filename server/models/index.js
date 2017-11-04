var db = require('../db');

// query database

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
    
     
    },
    post: function (username, callback) {
      var queryStr;
      db.dbConnection.query(queryStr, username, (err, results)=>{
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    }
  }
};

