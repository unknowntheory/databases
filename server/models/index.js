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
      
      // use username to get userId ??
      // get name from params
      // check if name exists in db
      // if name does not exist in db
      //     add name to db (post it)
      // if name does exist
      //  ----how do we check if name exists in database?---
      
      
      var name = params[0];
      var getIdQuery = 'select id from users where username(?)';
      
      db.dbConnection.query(getIdQuery, [name], (err, result) => {
        console.log('..............................this is the message post getQueryId result ', result);
        if (result === undefined) {
          console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> UNDEFINED', result);        
          // if name does not exist
          // add it to the username to the users list
          module.exports.users.post(name, (err, resp)=>{
            if (err) {
              console.log(err);
            } else {
              console.log('works');
            }
          });             
        } else {
          // if name does exist
          // change params name to query result id
          
          console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> ELSE', result);
          params[0] = result;  
        }
      });
      
      
      var queryStr = 'INSERT INTO messages (userid, message, roomname) VALUES(?,?,?)'; // ????????;
      //console.log('this is a messages model post, here are the values to post ', values);
      
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

