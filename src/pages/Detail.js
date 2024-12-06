import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import BannerImage from "../assets/detailback.jpg";
import "../styles/Detail.css";

function Detail() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const response = await axios.get(`https://https-github-com-dydykh-projetreact.onrender.com/api/films/${id}`);
                setFilm(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération du film:", error);
            }
        };
        fetchFilm();
    }, [id]);

    if (!film) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="detail" style={{ backgroundImage: `url(${BannerImage})` }}>
            <section className="container-filmInformation">
                <div className="container-imageInformation">
                    <img src={film.Image} alt={film.Nom} />
                </div>

                <div className="container-bodyInformation">
                    <h1 className="">{film.Nom}</h1>
                    <h2 className="">{film.Annee} - {film.Duree} - {film.Classification}</h2>
                    <p className=""><b>Note :</b> {film.Note} {film.Voteur} - Metascore : {film.NoteMeta}</p>
                    <p className=""><b>Réalisateur :</b> {film.Realisateur}</p>
                    <p className=""><b>Acteurs :</b> {film.Acteur1}, {film.Acteur2}, {film.Acteur3}</p>

                    <div className="container-synopsisInformation">
                        <h3>Synopsis :</h3>
                        <p>{film.Synopsis}</p>
                    </div>
                </div>

                

                <div className="container-footerInformation">
                    <a href={film.LienFilm} target="_blank" rel="noopener noreferrer">Voir le film</a>
                </div>
                <section className="container-boutonReturnCatalogue">
                    <Link to="/catalogue"> <button>Retour</button> </Link>
                </section>
            </section>
            
        </div>
    );
}

export default Detail;
