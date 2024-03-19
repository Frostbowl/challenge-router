import { Link } from "react-router-dom";
import React from "react";

const Nav = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='about'>A propos</Link></li>
                    <li><Link to='time'>Affichage de la date/heure</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;