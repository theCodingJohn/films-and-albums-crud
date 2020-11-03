const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    release_year: {
        type: Number,
        min: 1880,
        max: 2100
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
    },
    review: {
        type: String
    },
    poster_link: {
        type: String
    }
})

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;