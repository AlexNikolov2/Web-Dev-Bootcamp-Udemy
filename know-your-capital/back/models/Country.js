const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    founded: {
        type: String,
        required: true
    }
})

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;