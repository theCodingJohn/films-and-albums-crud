const express = require('express');
const Album = require('../models/album');
const router = express.Router();
const Film = require('../models/album');

// render album homepage
router.get('/music', async (req, res) => {
    const albums = await Album.find({});
    res.render('music/index', { albums });
})

// Add film
router.post('/music', async (req, res) => {
    const newAlbum = new Album(req.body);
    await newAlbum.save();
    res.redirect('/music')
})

// Edit album
router.put('/music/:id', async (req, res) => {
    const { id } = req.params;
    const album = await Album.findByIdAndUpdate(id, req.body, {runValidators: true});
    res.redirect(`/music/${album.id}`);
})

// Delete film 
router.delete('/music/:id', async (req, res) => {
    const {id} = req.params;
    await Album.findByIdAndDelete(id);
    res.redirect('/music')
})

// render add new album page
router.get('/music/add', (req, res) => {
    res.render('music/add')
})

// render album page
router.get('/music/:id', async (req, res) => {
    const {id} = req.params;
    const album = await Album.findById(id);
    res.render('music/albumPage', { album });
})

// render the edit album page
router.get('/music/:id/edit', async (req, res) => {
    const { id } = req.params;
    const album = await Album.findById(id);
    res.render('music/edit', { album })
})

module.exports = router;