const Superhero = require('../models/superhero');

const SuperheroController = {
    getAllSuperheroes: (req, res) => {
        const superheroes = Superhero.findAll();
        res.render('index', { superheroes });
    },

    toggleLikeSuperhero: (req, res) => {
        const id = parseInt(req.params.id);
        const updatedHero = Superhero.toggleLike(id);

        if (updatedHero) {
            res.json(updatedHero);
        } else {
            res.status(404).json({ message: 'Superhero not found' });
        }
    },

    getLikedSuperheroes: (req, res) => {
        const likedHeroes = Superhero.getLikedHeroes();
        res.json(likedHeroes);
    }
}

module.exports = SuperheroController;