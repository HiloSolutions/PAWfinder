//****** all code involved with starting the app ******//


// load .env data into process.env
require('dotenv').config()

//server
const express = require("express"); //load express
const app = express();

//middleware
const morgan = require('morgan');


const indexRouter = require("./routes/index.js");
const path = require('path'); //build module allows us to specify file paths


app.set('views',path.join(__dirname, 'views')); //define views engine
app.set('view engine', 'ejs'); //type of views used

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use(morgan);

//add the router
app.listen(3000, () => {
  console.log('Running at Port 3000');
});

//vars to delete
const