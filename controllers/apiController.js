const SuperheroModel = require('../models/superhero');

const ApiController = {
    toggleLikeSuperhero: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const updatedHero = SuperheroModel.toggleLike(id);

            if (updatedHero) {
                res.json(updatedHero);
            } else {
                res.status(404).json({ message: 'Superhero not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    },

    getLikedSuperheroes: (req, res) => {
        try {
            const likedHeroes = SuperheroModel.getLikedHeroes();
            res.json(likedHeroes);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
};

module.exports = ApiController;