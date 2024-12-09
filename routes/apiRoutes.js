const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apiController');

// API routes for superheroes
router.post('/superheroes/toggle-like/:id', ApiController.toggleLikeSuperhero);
router.get('/superheroes/liked', ApiController.getLikedSuperheroes);

module.exports = router;