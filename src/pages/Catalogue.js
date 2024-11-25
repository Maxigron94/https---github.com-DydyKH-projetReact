import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/catalogueback.jpg";
import axios from 'axios';
import "../styles/Catalogue.css";

function Catalogue() {
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 5;

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/films?index=${currentPage}`);
                setFilms(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des films:", error);
            }
        };
        fetchFilms();
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber - 1);
    };

    return (
        <div className="catalogue" style={{ backgroundImage: `url(${BannerImage})` }}>
            <h2 className="h2Catalogue">Notre top 50</h2>

            <div class="film-container2">
                <div className="film-container">
                    {films.map((film, index) => (
                        <Link
                            key={index}
                            to={`/detail/${film._id}`} // Utilisation de l'ID du film pour le lien
                            className="film"
                            style={{ backgroundImage: `url(${film.Image})` }}
                        >
                        </Link>
                    ))}
                </div>
            </div>
            

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Catalogue;
