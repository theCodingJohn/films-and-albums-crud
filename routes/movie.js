const express = require('express');
const router = express.Router();
const Film = require('../models/films');

// render films homepage
router.get('/films', async (req, res) => {
    const films = await Film.find({});
    res.render('films/index', { films });
})

// Add film
router.post('/films', async (req, res) => {
    const newFilm = new Film(req.body);
    await newFilm.save();
    res.redirect('/films')
})

// Edit film
router.put('/films/:id', async (req, res) => {
    const { id } = req.params;
    const film = await Film.findByIdAndUpdate(id, req.body, {runValidators: true});
    res.redirect(`/films/${film.id}`);
})

// Delete film 
router.delete('/films/:id', async (req, res) => {
    const {id} = req.params;
    await Film.findByIdAndDelete(id);
    res.redirect('/films')
})

// render add new film page
router.get('/films/add', (req, res) => {
    res.render('films/add')
})

// render film page
router.get('/films/:id', async (req, res) => {
    const {id} = req.params;
    const film = await Film.findById(id);
    res.render('films/filmPage', { film });
})

// render the edit film page
router.get('/films/:id/edit', async (req, res) => {
    const { id } = req.params;
    const film = await Film.findById(id);
    res.render('films/edit', { film })
})

module.exports = router;