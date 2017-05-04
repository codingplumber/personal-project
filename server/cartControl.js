const app = require('./server')
    , db = app.get('db');

module.exports = {

  createItem: (req, res) => {
    let item = req.body;
    console.log('hello',req.body);
    db.create_item_in_cart([item.purchase, item.quantity, item.user_id], (err, items) => {
      if (!err) {
        res.send(items);
      } else {
        res.send(err);
      }
    });
  }

};
