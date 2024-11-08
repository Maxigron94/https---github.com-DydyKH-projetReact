import React from 'react'
import Logo from '../assets/titre.jpg'

function Footer() {
  return (
    <div id="footer">
        <div>
            <p>© MovieMaf - Tous droits réservés</p>
        </div>
        <div>
            <img src={Logo} alt="logo footer" className='logo'/>
        </div>
    </div>
  )
}

export default Footer
