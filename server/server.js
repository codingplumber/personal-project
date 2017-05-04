const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors');
    // , session = require('express-session');

const app = module.exports = express();

// const corsOptions = {
//   origin: 'http://localhost:3000'
// };

const massiveInstance = massive.connectSync({connectionString: 'postgres://postgres@localhost/personal-project'});

app.use(bodyParser.json());
// app.use(cors(corsOptions));
app.use(express.static(__dirname + './../dist')); //what folder should this be pointing to???

const port = 3000;

app.set('db', massiveInstance);
const productsControl = require('./productsControl');
const usersControl = require('./usersControl');
const cartControl = require('./cartControl');
// const db = app.get('db');

//PRODUCTS
app.get('/read', productsControl.getAllProducts);
// app.get('/read/:product_id', productsControl.getOneProduct);
app.get('/read/:category', productsControl.getProductsByCategory);

//CUSTOMERS
app.post('/create/user', usersControl.createUser);
app.get('/read/user/:email/:password', usersControl.getUser);

//CART
app.post('/create/cart', cartControl.createItem);

//TEST
app.get('/test', function(req, res) {
  res.status(200).json('test working');
})

app.listen(port, console.log('Listening on port:', port));
