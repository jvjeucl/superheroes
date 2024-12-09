const express = require('express');
const router = express.Router();
const SuperheroController = require('../controllers/superheroController');

// Home page route
router.get('/', SuperheroController.getAllSuperheroes);

module.exports = router;