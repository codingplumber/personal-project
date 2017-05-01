const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors');

const app = module.exports = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

const massiveInstance = massive.connectSync('connectionString: postgres://postgres@localhost/personal-project');

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + './../public')); //what folder should this be pointing to???

const port = 3000;

app.set('db', massiveInstance);
const serverCtrl = require('./serverCtrl');
const db = app.get('db');



app.listen(port, console.log('Listening on port:', port));
