const app = require('./server')
    , db = app.get('db');

module.exports = {

  createUser: (req, res) => {
    let user = req.body.user;
    db.create_user([user.first_name, user.last_name, user.email, user.password], (err, users) => {
      if (!err) {
        res.send(users);
      } else {
        res.send(err);
      }
    });
  },

  getUser: (req, res) => {
    let email = req.param.email;
    let password = req.param.password;
    db.get_user([user.email, user.password], (err, user) => {
      if (!err) {
        res.status(200).send(user);
      } else {
        res.send(err);
      }
    });
  }

};
