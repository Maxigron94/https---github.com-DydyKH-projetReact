import React from "react";
import { useParams } from "react-router-dom";
import BannerImage from "../assets/back.jpg";
import "../styles/Detail.css";

function Detail() {
    const { id } = useParams();


    const containers = [
        { id: 1, name: "Conteneur 1", description: "Description du Conteneur 1" },
        { id: 2, name: "Conteneur 2", description: "Description du Conteneur 2" },
        { id: 3, name: "Conteneur 3", description: "Description du Conteneur 3" },
        { id: 4, name: "Conteneur 4", description: "Description du Conteneur 4" },
        { id: 4, name: "Conteneur 5", description: "Description du Conteneur 5" },
        { id: 4, name: "Conteneur 6", description: "Description du Conteneur 6" },
        { id: 4, name: "Conteneur 7", description: "Description du Conteneur 7" },
        { id: 4, name: "Conteneur 8", description: "Description du Conteneur 8" },
        { id: 4, name: "Conteneur 9", description: "Description du Conteneur 9" },
        { id: 4, name: "Conteneur 10", description: "Description du Conteneur 10" },
        { id: 4, name: "Conteneur 11", description: "Description du Conteneur 11" },
        { id: 4, name: "Conteneur 12", description: "Description du Conteneur 12" },
    ];

    const container = containers.find((c) => c.id === parseInt(id));

    return (
        <div className="detail" style={{ backgroundImage: `url(${BannerImage})` }}>
            {container ? (
                <>
                    <h1>{container.name}</h1>
                    <p>{container.description}</p>
                </>
            ) : (
                <p>Conteneur introuvable.</p>
            )}
        </div>
    );
}

export default Detail;