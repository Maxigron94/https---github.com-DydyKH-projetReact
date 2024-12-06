// RandomFilm.js
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const RandomFilm = () => {
    const [selectedFilm, setSelectedFilm] = useState(null);

    // Fonction pour récupérer un film aléatoire
    const getRandomFilm = async () => {
        try {
            const response = await axios.get(' https://https-github-com-dydykh-projetreact.onrender.com/api/FilmRandom');
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
        <div className="containerFRP">
            <div className="containerFRTitre">
                <h1>Top 50 des films incontournables</h1>
                <p>Une collection à ne pas manquer !</p>
            </div>
            <div className="containerFRSectionRandom">
                <div className="containerFRB"> 
                    <button className="boutonFR" onClick={getRandomFilm}>Trouvez votre film!</button>
                    <Link to="/catalogue">
                        <button className="boutonFR">
                            Consulter les films disponibles
                        </button>
                    </Link>
                </div>

                {selectedFilm && (
                <section className="containerFR">
                    <div className="containerImageFR"> 
                    <img className="imgFR" src={selectedFilm.Image} alt={selectedFilm.Nom} />
                    </div>
                    <div className="containerInformationFR">
                        <p className="nomFR">{selectedFilm.Nom}</p>
                        <p className="dateFR">{selectedFilm.Annee} - {selectedFilm.Duree} - {selectedFilm.classification}</p>
                        <p className="noteFR">Note: {selectedFilm.Note} {selectedFilm.Voteur}</p>
                        <p className="noteFR">Metascore: {selectedFilm.NoteMeta}</p>
                        <p className="auteurFR">De: {selectedFilm.Realisateur}</p>
                        <p className="acteurFR">Acteurs: {selectedFilm.Acteur1}, {selectedFilm.Acteur2}, {selectedFilm.Acteur3}</p>
                    </div>
                    <div className="containerSynopsisFR"> 
                        <p>{selectedFilm.Synopsis}</p>
                    </div>
                </section>
            )}
            </div>
            
            
            
        </div>
    );
};

export default RandomFilm;
