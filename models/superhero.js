const superheroes = [
    {
        id: 1,
        name: 'He-Man',
        realName: 'Prince Adam',
        powers: ['Super Strength', 'Magic Sword'],
        imageUrl: 'https://example.com/he-man.jpg',
        description: 'Master of the Universe',
        liked: true
    },
    {
        id: 2,
        name: 'Thundercats',
        realName: 'Lion-O',
        powers: ['Super Speed', 'Sword of Omens'],
        imageUrl: 'https://example.com/lion-o.jpg',
        description: 'Leader of the Thundercats',
        liked: true
    },
    {
        id: 3,
        name: 'Transformers',
        realName: 'Optimus Prime',
        powers: ['Robot Transformation', 'Leadership'],
        imageUrl: 'https://example.com/optimus.jpg',
        description: 'Autobot Leader',
        liked: false
    },
    {
        id: 4,
        name: 'G.I. Joe',
        realName: 'Duke',
        powers: ['Military Strategy', 'Combat Skills'],
        imageUrl: 'https://example.com/duke.jpg',
        description: 'G.I. Joe Commander',
        liked: false
    },
    {
        id: 5,
        name: 'SuperTed',
        realName: 'SuperTed',
        powers: ['Rocket Boots', 'Superhuman strength'],
        imageUrl: 'images/superted.png',
        description: 'SuperTed',
        liked: false
    }
];

const SuperheroModel = {
    findAll: () => {
        return superheroes;
    },

    findById: (id) => {
        return superheroes.find(hero => hero.id === id);
    },

    toggleLike: (id) => {
        const hero = SuperheroModel.findById(id);
        if (hero) {
            hero.liked = !hero.liked;
            return hero;
        }
        return null;
    },

    getLikedHeroes: () => {
        return superheroes.filter(hero => hero.liked);
    }
};

module.exports = SuperheroModel;




