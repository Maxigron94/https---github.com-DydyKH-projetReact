// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://felix:felix123@projet2cluster.3f2tj.mongodb.net/Data?retryWrites=true&w=majority&appName=Projet2Cluster')
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

const cinemaSchema = new mongoose.Schema({
    Nom: {type:String},
    Annee: {type:String},
    Duree: {type:String},
    Classification: {type:String},
    Note: {type:String},
    Voteur: {type:String},
    NoteMeta: {type:String},
    Synopsis: {type:String},
    Realisateur: {type:String},
    LienRealisateur: {type:String},
    Acteur1: {type:String},
    Acteur2: {type:String},
    Acteur3: {type:String},
    LienFilm: {type:String},
    Image: {type:String}
});

const top50 = mongoose.model('top50', cinemaSchema, 'top50');

app.get('/api/FilmRandom', async (req, res) => {
    try {
        const count = await top50.countDocuments();
        if (count === 0) {
            return res.status(404).json({ message: "Aucun film trouvé" });
        }
        const random = Math.floor(Math.random() * count);
        const randomFilm = await top50.findOne().skip(random);
        res.json(randomFilm);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
