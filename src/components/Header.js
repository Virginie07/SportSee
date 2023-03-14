import React from 'react';
import '../styles/index.css';
import "../styles/Header.css";
import LogoSportSee from '../img/Logo.png';


const Header = () => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img className='navbar__logo--img' src={LogoSportSee} alt="logo" />
                <p className='navbar__logo--para'>SportSee</p>
            </div>
            
            <ul className='navbar__list'>
                <li className='navbar__list--item'>Accueil</li>
                <li className='navbar__list--item'>Profil</li>
                <li className='navbar__list--item'>Réglage</li>
                <li className='navbar__list--item'>Communauté</li>
            </ul>
        </div>
    );
};

export default Header;