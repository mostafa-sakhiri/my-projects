const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// get products from the db
router.get('/products' , function(req , res , next){

    Product.find({}).then(function(products){
        res.send(products);
    });

    
});


// get a single product by id
router.get('/product/:id' , function(req , res , next){

    Product.findOne({_id: req.params.id }).then(function(product){
        res.send(product);
    });

    
});


// add a new product to the database
router.post('/product/add' , function(req , res , next){
    
    // create a product instance and save it to the db
    Product.create(req.body).then(function(product){
            res.send(product);
    }).catch(next);

});


// update a product in the database
router.put('/product/:id' , function(req , res , next){

    Product.findByIdAndUpdate({ _id: req.params.id } , req.body ).then(function(product){
        Product.findOne({ _id: req.params.id }).then(function(product){
            res.send({ msg : "product modified successfuly"});
        });
    
    });

});


// delete a product from the datbase
router.delete('/product/:id' , function(req , res , next){

    Product.findByIdAndRemove({ _id: req.params.id }).then(function(product){
        res.send(product);
    });

});

module.exports = router;
