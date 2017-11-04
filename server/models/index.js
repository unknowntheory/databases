var db = require('../db');

// query database

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (userName, message, roomName, callback) {
      var queryStr = 'INSERT INTO messages (?)'; // ????????;
      db.dbConnection.query(queryStr, )
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
    
     
    },
    post: function (userName, callback) {
      var queryStr = 'INSERT INTO users (username) VALUES (?)'; 
      db.dbConnection.query(queryStr, userName, (err, results)=>{
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    }
  }
};

