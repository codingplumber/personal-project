const app = require('./server')
    , db = app.get('db');

module.exports = {

  createItem: (req, res) => {
    let item = req.body;
    db.create_item_in_cart([item.purchase, item.quantity, item.user_id], (err, items) => {
      if (!err) {
        res.send(items);
      } else {
        res.send(err);
      }
    });
  },

  getCart: (req, res) => {
    let user = req.body.user;
    console.log('getCart', user);
    db.get_cart([user], (err, cart) => {
      console.log(cart);
      if (!err) {
        res.send(cart);
      } else {
        res.send(err);
      }
    });
  }

};
