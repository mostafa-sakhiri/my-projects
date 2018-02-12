const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

// get tasks from the db
router.get('/tasks' , function(req , res , next){

    Task.find({}).then(function(task){
        res.send(task);
    });

    
});


// add a new task to the database
router.post('/task/add' , function(req , res , next){
    
    // create a product instance and save it to the db
    Task.create(req.body).then(function(task){
            res.send(task);
    }).catch(next);

});


//modify a task in the database
router.put('/task/:id' , function(req, res , next){

    Task.findByIdAndUpdate({ _id: req.params.id } , req.body ).then(function(task){
        Task.findOne({ _id: req.params.id }).then(function(task){
            res.send(task);
        });
    });
});


// delete a task from the datbase
router.delete('/task/:id' , function(req , res , next){

    Task.findByIdAndRemove({ _id: req.params.id }).then(function(task){
        res.send(task);
    });

});

module.exports = router;
