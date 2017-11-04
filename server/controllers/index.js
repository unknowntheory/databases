var models = require('../models');
// handle requests

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      var name = req.body.username;
      var message = req.body.message;
      var room = req.body.roomname;
      models.messages.post(name, message, roomname, function (err, results) {
        if (err) {
          console.error(err);
        }
        res.sendStatus(201);
      });          
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //req.username;
      var name = req.body.username;
      console.log(req.body);
      models.users.post(name, function (err, results) {
        if (err) {
          console.error(err);
        }
        res.sendStatus(201);
      }); 
    }
  }
};
  
