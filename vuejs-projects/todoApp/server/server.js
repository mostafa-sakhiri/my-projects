const express = require('express');
const routes = require('./api/api');
const mongoose = require('mongoose');

var cors = require('cors')

const bodyParser = require('body-parser');

// set up express app
const app = express();

// use the parser
app.use(bodyParser.json());

// use cors
app.use(cors());

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
mongoose.connect('mongodb://localhost/todo-app');
mongoose.Promise = global.Promise;

//listen to port 4000
app.listen( 4000 , function(){
    console.log("you are listening for requests from the port 4000");
});
