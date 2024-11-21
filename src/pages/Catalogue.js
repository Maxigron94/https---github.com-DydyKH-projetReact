import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/back.jpg";
import "../styles/Catalogue.css";

function Catalogue() {
    const containers = [
        "Conteneur 1", "Conteneur 2", "Conteneur 3", "Conteneur 4",
        "Conteneur 5", "Conteneur 6", "Conteneur 7", "Conteneur 8",
        "Conteneur 9", "Conteneur 10", "Conteneur 11", "Conteneur 12"
    ];

    const containersPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastContainer = currentPage * containersPerPage;
    const indexOfFirstContainer = indexOfLastContainer - containersPerPage;
    const currentContainers = containers.slice(indexOfFirstContainer, indexOfLastContainer);
    const totalPages = Math.ceil(containers.length / containersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="catalogue" style={{ backgroundImage: `url(${BannerImage})` }}>
            <h2 className="h2Catalogue">Page Catalogue</h2>

            <div className="film-container">
                {currentContainers.map((container, index) => (
                    <Link
                        key={index}
                        to={`/detail/${index + 1}`}
                        className="film"
                    >
                        {container}
                    </Link>
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