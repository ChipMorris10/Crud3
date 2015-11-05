var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var House = new Schema({
    location:String,
    price: Number,
    garage: Boolean
});


mongoose.connect (process.env.MONGO_URI || 'mongodb://localhost/houses');


module.exports = mongoose.model('houses', House);  // making mongoose database available to the rest of the app. The rest of the app uses this as a resource.