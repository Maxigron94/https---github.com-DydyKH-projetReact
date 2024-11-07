const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // Choisis un port approprié

app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb+srv://felix:felix123@projet2cluster.3f2tj.mongodb.net/')
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Schéma et modèle Cinema
const cinemaSchema = new mongoose.Schema({
    Nom: String,
    Lien: String,
    Date: String,
    Genre1: String,
    Genre2: String,
    Realisateur: String,
    LienRealisateur: String,
    Acteur1: String,
    Acteur2: String,
    Acteur3: String,
    NotePresse: String,
    NotePublique: String,
    Synopsis: String,
    Image: String
});

const Cinema = mongoose.model('Cinema', cinemaSchema);

// Route pour récupérer toutes les données de la collection Cinema
app.get('/api/cinema', async (req, res) => {
    try {
        const cinemas = await Cinema.find({});
        res.json(cinemas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
