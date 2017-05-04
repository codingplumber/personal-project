const app = require('./server')
    , db = app.get('db');

module.exports = {

  createItem: (req, res) => {
    let item = req.body;
    db.create_item_in_cart([item.customer_id, item.product_id, item.quantity], (err, items) => {
      if (!err) {
        res.send(items);
      } else {
        res.send(err);
      }
    });
  }

};
