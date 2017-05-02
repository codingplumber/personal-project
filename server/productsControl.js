const app = require('./server')
    , db = app.get('db');

module.exports = {

  getAllProducts: (req, res) => {
    db.get_products((err, products) => {
      if (!err) {
        res.status(200).send(products);
      } else {
        res.send(err);
      }
    });
  },

  getOneProduct: (req, res) => {
    let search = req.params.product_id;
    db.get_one_product(search, (err, product) => {
      if (!err) {
        res.status(200).send(product);
      } else {
        res.send(err);
      }
    });
  }

};
