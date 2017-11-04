var db = require('../db');

// the models will receive requests from controllers and query the database

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    //   post: function (userName, message, roomName, callback) {
    //     var queryStr = 'INSERT INTO messages (?)'; // ????????;
    //     //db.dbConnection.query(queryStr, )
    //   } // a function which can be used to insert a message into the database
    // },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages (userid, message, roomname) VALUES(?,?,?)'; // ????????;
      console.log('this is a messages model post, here are the values to post ', values);
      // use username to get userId ??
      // get name from params
      // check if name exists in db
      // if name does not exist in db
      //     add name to db (post it)
      // if name does exist
      //  ----how do we check if name exists in database?---
      //   change params name to id
      
      
      db.dbConnection.query(queryStr, params, (err, results)=> {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }     
      });
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

