import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomFilm = () => {
    //Récupérer les films
    const [cinemas, setCinemas] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cinema');
                setCinemas(response.data);
            } catch (error) {
                console.error('Error fetching the cinema data:', error);
            }
        };

        fetchData();
    }, []);

    //choisir le film random
    const getRandomFilm = () => {
        const randomIndex = Math.floor(Math.random() * cinemas.length);
        setSelectedFilm(cinemas[randomIndex]);
    };

    return (
        <div>
            <button onClick={getRandomFilm}>Film aléatoire</button>
            {selectedFilm && (
                <div>
                    <h2>{selectedFilm.Nom}</h2>
                    <p>{selectedFilm.Date}</p>
                    <p>{selectedFilm.Genre1}, {selectedFilm.Genre2}</p>
                    <p>{selectedFilm.Realisateur}</p>
                    <p>{selectedFilm.Synopsis}</p>
                </div>
            )}
        </div>
    );
};

export default RandomFilm;
