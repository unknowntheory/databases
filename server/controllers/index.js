var models = require('../models');
// handle requests

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
     // get username
     // pass it to models.users.post
     // if err console log err
     // else send status code 201
     // res.sendStatus(201); 
      
    }
  }
};
  
