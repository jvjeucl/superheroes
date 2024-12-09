const express = require('express');
const app = express();
const PORT = 3000;

// 🚨 Global data storage directly in the file
// Problem: No clear data management, can lead to unexpected mutations
let superheroes = [
    {
        id: 1,
        name: 'He-Man',
        powers: ['Super Strength', 'Magic Sword'],
        liked: false
    },
    {
        id: 2,
        name: 'Thundercats',
        powers: ['Super Speed', 'Sword of Omens'],
        liked: false
    }
];

// 🚨 Middleware mixed with route logic
app.use(express.json());
app.use((req, res, next) => {
    // Logging mixed into middleware
    console.log(`${new Date()} - ${req.method} ${req.path}`);
    next();
});

// 🚨 Route handler doing multiple responsibilities
app.get('/superheroes', (req, res) => {
    // Mixing presentation logic with data retrieval
    // What if we want to render differently or add more complex filtering?
    let heroesWithExtraInfo = superheroes.map(hero => ({
        ...hero,
        powerCount: hero.powers.length,
        isSpecial: hero.powers.length > 1
    }));

    // Directly rendering or sending data
    // No separation between data preparation and response
    res.json(heroesWithExtraInfo);
});

// 🚨 Complex logic directly in route handler
app.post('/superheroes/like/:id', (req, res) => {
    const heroId = parseInt(req.params.id);

    // Error handling mixed with business logic
    if (!heroId) {
        return res.status(400).json({ error: 'Invalid ID' });
    }

    // Direct data mutation in route handler
    let heroToUpdate = superheroes.find(hero => hero.id === heroId);

    if (!heroToUpdate) {
        return res.status(404).json({ error: 'Superhero not found' });
    }

    // Toggling like status
    heroToUpdate.liked = !heroToUpdate.liked;

    // Sending back entire modified list - inefficient!
    res.json(superheroes);
});

// 🚨 Adding more routes increases complexity
app.get('/superheroes/liked', (req, res) => {
    // Filtering logic directly in route
    let likedHeroes = superheroes.filter(hero => hero.liked);
    res.json(likedHeroes);
});

// 🚨 Error handling as an afterthought
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});