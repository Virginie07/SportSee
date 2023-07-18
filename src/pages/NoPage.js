import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NoPage.css"

const NoPage = () => {
  return (
    <div>
      <div className="error">
        <p className="error__txt">
          Oups! La page que vous demandez n'existe pas.
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

export default NoPage;
