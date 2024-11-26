import React from 'react';
import RandomFilm from '../components/RandomFilm';
import BannerImage from "../assets/back2.jpg";
import ExterImage from "../assets/exterieur.png";
import "../styles/Home.css";


const Home = () => {
    return (
        
        <div className="home" style={{ backgroundImage: `url(${ExterImage})`}}>
            <div className="homeContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
                <RandomFilm />
            </div>
        </div>
    );
};

export default Home;
