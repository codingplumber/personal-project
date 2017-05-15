const app = require('./server')
    , db = app.get('db');

module.exports = {

  login: (req, res) => {
    // console.log(req.body);
    let user = req.body;
    let userInfo = [user.email, user.password];
    db.login(userInfo, (err, user) => {
      if (!err) {
        res.status(200).send(user);
      } else {
        res.send(err)
      }
    });
  }

};
