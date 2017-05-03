const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors');

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
// const db = app.get('db');

app.get('/read', productsControl.getAllProducts);
// app.get('/read/:product_id', productsControl.getOneProduct);
app.get('/read/:category', productsControl.getProductsByCategory);
app.post('/create/user', productsControl.createUser);   //create a userControl and put the function there

app.get('/test', function(req, res) {
  res.status(200).json('test working');
})

app.listen(port, console.log('Listening on port:', port));
