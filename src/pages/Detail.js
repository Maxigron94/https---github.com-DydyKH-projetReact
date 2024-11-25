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
                const response = await axios.get(`http://localhost:5000/api/films/${id}`);
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
            <section className="container-boutonReturnCatalogue">
                <Link to="/catalogue"> <button>Retour</button> </Link>
            </section>
            <section class="container-filmInformation">
                <div class="container-imageInformation">
                    <img src={film.Image} alt={film.Nom} />
                </div>

                <div class="container-bodyInformation">
                    <p class="">{film.Nom}</p>
                    <p class="">{film.Annee} - {film.Duree} - {film.Classification}</p>
                    <p class="">Note: {film.Note} {film.Voteur} - Metascore: {film.NoteMeta}</p>
                    <p class="">De: {film.Realisateur}</p>
                    <p class="">Acteurs: {film.Acteur1}, {film.Acteur2}, {film.Acteur3}</p>
                </div>

                <div class="container-synopsisInformation">
                    <p>{film.Synopsis}</p>
                </div>

                <div class="container-footerInformation">
                    <a href={film.LienFilm} target="_blank" rel="noopener noreferrer">Voir le film</a>
                </div>
            </section>
            
        </div>
    );
}

export default Detail;
