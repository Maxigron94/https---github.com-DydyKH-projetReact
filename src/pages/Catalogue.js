import React, { useState } from 'react';
import BannerImage from "../assets/back.jpg";
import "../styles/Catalogue.css";

function Catalogue() {

    const containers = [
        "Conteneur 1", "Conteneur 2", "Conteneur 3", "Conteneur 4",
        "Conteneur 5", "Conteneur 6", "Conteneur 7", "Conteneur 8",
        "Conteneur 9", "Conteneur 10", "Conteneur 11", "Conteneur 12"
    ];

    // Nombre de conteneurs affichés par page
    const containersPerPage = 6;

    // État pour la page actuelle
    const [currentPage, setCurrentPage] = useState(1);

    // Calculer les indices des conteneurs à afficher en fonction de la page
    const indexOfLastContainer = currentPage * containersPerPage;
    const indexOfFirstContainer = indexOfLastContainer - containersPerPage;
    const currentContainers = containers.slice(indexOfFirstContainer, indexOfLastContainer);

    // Changer de page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(containers.length / containersPerPage);

    return (
        <div className="catalogue" style={{ backgroundImage: `url(${BannerImage})` }}>
            <h2>Page Catalogue</h2>

            <div className="film-container">
                {currentContainers.map((container, index) => (
                    <div key={index} className="film">
                        {container}
                    </div>
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Catalogue;
