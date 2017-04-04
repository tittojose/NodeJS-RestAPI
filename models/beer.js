const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create beer schema
const beerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name of beer is required']
    },
    quantity: {
        type: Number,
        default: 750
    },
    price: {
        type: Number,
        required: [true, 'Price of beer is required']
    }
});

const Beer = mongoose.model('beer', beerSchema);

module.exports = Beer;