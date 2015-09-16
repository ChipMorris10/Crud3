var express = require('express');
var router = express.Router();  // creates a Router function which gets uses throughout
var House = require('../models/houses');

// GET ALL house
router.get('/houses', function(req, res, next) {
    res.send("Hey Johnny!");
});

// GET SINGLE house
router.post('/houses', function (req, res, next) {

});


// POST ALL houses
router.post('/houses', function (req, res, next) {

});

// GET ONE house
router.post('/houses', function (req, res, next) {

});

// UPDATE ONE house
router.post('/houses', function (req, res, next) {

});

// DELETE ONE house
router.post('/houses', function (req, res, next) {

});







module.exports = router;