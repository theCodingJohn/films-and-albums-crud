const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
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
    artwork_link: {
        type: String
    }
})

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;