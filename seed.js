const mongoose = require('mongoose');
const Album = require('./models/album');

mongoose.connect('mongodb://localhost:27017/webApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MONGO CONNECTION OPEN');
    })
    .catch(err => {
        console.log('ERROR');
    })

const theResistance = new Album({
    title: 'The Resistance',
    release_year: 2009,
    rating: 9,
    review: 'This rocks!',
    artwork_link: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Theresistance.jpg'
})

theResistance.save() .then(r => {
    console.log(r)
}) .catch(err => {
    console.log(r)
})