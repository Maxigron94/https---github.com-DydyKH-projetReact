import React from 'react'
import Logo from '../assets/titre.jpg'


function Navbar() {
    return (
        <div className="navbar">
            <div className='leftSide'>
                <img src={Logo} alt="Test" className='logo' />
            </div>
            <div className='rightSide'>
                <div>Accueil</div>
                <div>Catalogue</div>
                <div>Équipe</div>
            </div>

        </div>
    )
}

export default Navbar
