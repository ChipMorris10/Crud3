var express = require('express');
var router = express.Router();  // creates a Router function which gets uses throughout
var House = require('../models/houses');

// GET ALL house
router.get('/houses', function(req, res, next) {
   House.find(function(err, housesData) {
     if(err) {
            res.json({'message': err});
        } else {
            res.json(housesData);
        }
    });
});

// GET SINGLE house
router.get('/house/:id', function (req, res, next) {
    House.findById(req.params.id, function(err, houseData) {
        if(err) {
            res.json({'message': err});
        } else {
            res.json(houseData);
        }
    });
});


// POST ALL houses
router.post('/houses', function (req, res, next) {
    newHouse = new House ( {
        location:req.body.location,
        price:req.body.price,
        garage:req.body.garage
    });
    newHouse.save(function(err, houseData) {
        if(err) {
            res.json({'message': err});
        } else {
            res.json(houseData);
        }
    });
});

// PUT (Update) ONE house
router.put('/houses/:id', function (req, res, next) {
    var update = {
        location:req.body.location,
        price:req.body.price,
        garage:req.body.price
    };
    House.findByIdAndUpdate(req.params.id, update, function(err,houseData) {
        if(err) {
            res.json({'message': err});
        } else {
            res.json(houseData);
        }
    });
});

// DELETE ONE house
router.delete('/houses', function (req, res, next) {

});







module.exports = router;