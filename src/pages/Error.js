import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/error.scss';

const Error = () => {
    return (
        <div>
      <div className="error">
        <p className="error__txt">
          Une erreur est survenue dans la récupération des données.
        </p>
      </div>

      <NavLink to="/" className="linkError">
        <button className="linkError__button">
          <li className="linkError__txtAccueil">
            Retourner sur la page d'accueil
          </li>
        </button>
      </NavLink>
    </div>
    );
};

export default Error;