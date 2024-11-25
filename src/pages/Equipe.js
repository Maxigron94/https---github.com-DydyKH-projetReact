import React from 'react'
import audy from "../assets/a.jpg";
import felix from "../assets/f.jpeg";
import maxime from "../assets/m.jpeg";

function Equipe() {
    return (
        <div id='equipe'>
            <h1>Une équipe qui va vous exposer tous les faits !</h1>
            <div>
                <div className='container'>
                    <img className="avatar" src={audy} alt="Himiko Toga" />
                    <div className='overlay'>
                        <div className="texte">
                            <h2>Audy Altis</h2>
                            <ul>
                                <li>Développeur graphique</li>
                                <li>La personne qui a fait le design. Enfin, plus ou moins</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <img className="avatar" src={felix} alt="Evelynn" />
                    <div className='overlay'>
                        <div className="texte">
                            <h2>Felix Laventure</h2>
                            <ul>
                                <li>Développeur PROfessionel</li>
                                <li>La personne qui a souffert pour lier la bd avec React</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <img className="avatar" src={maxime} alt="Singe penseur" />
                    <div className='overlay'>
                        <div className="texte">
                            <h2>Maxime Grondin</h2>
                            <ul>
                                <li>Chef de projet</li>
                                <li>La personne qui dirige le projet MovieMAF</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipe
