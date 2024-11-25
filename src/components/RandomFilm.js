// RandomFilm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomFilm = () => {
    const [selectedFilm, setSelectedFilm] = useState(null);

    // Fonction pour récupérer un film aléatoire
    const getRandomFilm = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/FilmRandom');
            setSelectedFilm(response.data);
        } catch (error) {
            console.error('Error fetching the random film:', error);
        }
    };

    // Charger un film aléatoire au chargement de la page
    useEffect(() => {
        getRandomFilm();
    }, []);

    return (
        <div class="containerFRP">
            <button class="boutonFR" onClick={getRandomFilm}>Trouvez votre film!</button>
            {selectedFilm && (
                <section class="containerFR">
                    <div class="containerImageFR"> 
                    <img class="imgFR" src={selectedFilm.Image} alt={selectedFilm.Nom} />
                    </div>
                    <div class="containerInformationFR">
                        <p class="nomFR">{selectedFilm.Nom}</p>
                        <p class="dateFR">{selectedFilm.Annee} - {selectedFilm.Duree} - {selectedFilm.Classification}</p>
                        <p class="noteFR">Note: {selectedFilm.Note} {selectedFilm.Voteur} - Metascore: {selectedFilm.NoteMeta}</p>
                        <p class="auteurFR">De: {selectedFilm.Realisateur}</p>
                        <p class="acteurFR">Acteurs: {selectedFilm.Acteur1}, {selectedFilm.Acteur2}, {selectedFilm.Acteur3}</p>
                    </div>
                    <div class="containerSynopsisFR"> 
                        <p>{selectedFilm.Synopsis}</p>
                    </div>
                    
                    
                </section>
            )}
        </div>
    );
};

export default RandomFilm;
