import React from 'react';
import RandomFilm from '../components/RandomFilm';
import BannerImage from "../assets/back2.jpg";
import "../styles/Home.css";


const Home = () => {
    return (
        
        <div className="home">
            <div className="homeContainer" style={{ backgroundImage: `url(${BannerImage})` }}>
                <RandomFilm />
            </div>
        </div>
    );
};

export default Home;
