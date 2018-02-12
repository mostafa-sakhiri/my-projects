const express = require('express');
const routes = require('./server/api/showProducts');
const mongoose = require('mongoose');





const bodyParser = require('body-parser');

// set up express app
const app = express();

// use cors to allow access :)
var cors = require('cors'); 
app.use(cors());

// use the parser
app.use(bodyParser.json());

// inialize the routes
app.use('/api' , routes);

// error handling middleware
app.use(function(err , req , res , next){
    //console.log(error);
    res.status(422).send({error: err.message})
});

// static files
app.use(express.static('public'));

// connect to the database
mongoose.connect('mongodb://localhost/zero-shop');
mongoose.Promise = global.Promise;

//listen to port 4000
app.listen( 4000 , function(){
    console.log("you are listening for requests from the port 4000");
});
