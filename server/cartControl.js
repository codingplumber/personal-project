const app = require('./server')
    , db = app.get('db');

module.exports = {

  createItem: (req, res) => {
    let item = req.body;
    //item is the item we are adding to the cart for the user
    //get the whole cart for the current user
    //cart is a variable called cart...see cart below next to err
    db.get_cart([item.user_id], (err, cart) => {
      if (!err) {
        //found is a var to establish if we found a duplicate item
        let found = false;
        //index is saving the value of i glbally within the if statement
        let index = 0;
        //looping through the cart to see if item is already in the cart
        for (var i = 0; i < cart.length; i++) {
          //if item purchased = item in cart
          if (cart[i].product_id === item.purchase) {
            index = i;
            //we found a duplicate
            found = true;
            //add the item purchased to the quantity of the item in the cart
            cart[i].quantity += item.quantity;
          }
        }
        //if we didnt find the item in the cart
        if (found === false) {
          //we are creating the item to add to the cart
          db.create_item_in_cart([item.purchase, item.quantity, item.user_id], (err) => {
            if (!err) {
              //sending status saying item was added
              res.status(200).send();
            } else {
              res.send(err);
            }
          })
        //if we did find the item, quantity is updated with the product_id and the user from before
        } else {
          db.update_quantity([cart[index].product_id, cart[index].quantity, cart[index].customer_id], (err) => {
            if (!err) {
              res.status(200).send();
            } else {
              res.send(err);
            }
          })
        }
      }
      //if we tried to get the cart, and we get an error instead, this will run
      else {
        res.send(err);
      }
    })

  },

  getCart: (req, res) => {
    console.log('getCart', req.body);
    let user = req.body.user;

    db.get_cart([user], (err, cart) => {
      console.log(cart);
      if (!err) {
        res.send(cart);
      } else {
        res.send(err);
      }
    });
  },

  deleteCart: (req, res) => {
    db.delete_cart((err, cart) => {
      if (!err) {
        res.send(cart);
      } else {
        res.send(err);
      }
    });
  }

};
