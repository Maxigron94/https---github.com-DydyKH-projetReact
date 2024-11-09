import React, { useState } from 'react';
import Logo from '../assets/titre.jpg';
import { Link } from "react-router-dom";


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavBar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="Test" className='logo' />
                <div className="hiddenLinks">
                    <Link to="/">Accueil</Link>
                    <Link to="/catalogue">Catalogue</Link>
                    <Link to="/equipe">Équipe</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Accueil</Link>
                <Link to="">Catalogue</Link>
                <Link>Équipe</Link>
                <button onClick={toggleNavBar}>
                    Plus
                </button>
            </div>

        </div>
    )
}

export default Navbar
