const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    capital: {
        type: String,
        required: true,
    },
    capitalInfo: {
        type: String,
        required: true,
    },
    flag: {
        type: String,
        required: true,
    },
    capitalPopulation: {
        type: Number,
        required: true,
    },
    capitalYearFounded: {
        type: Number,
        required: true,
    },
});

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;