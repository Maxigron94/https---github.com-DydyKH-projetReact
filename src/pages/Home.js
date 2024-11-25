import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/back.jpg";
import "../styles/Home.css";


const Home = () => {
    return (

        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">

                <h1>Site de films judiciaires</h1>
                <p>Une collection bien appréciée</p>
                <Link to="/catalogue">
                    <button>
                        Consulter les films disponibles
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Home;
