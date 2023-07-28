import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NoPage.scss"

const NoPage = () => {
  return (
    <div>
      <div className="noPage">
        <p className="noPage__txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>

      <NavLink to="/" className="linkNoPage">
        <button className="linkNoPage__button">
          <li className="linkNoPage__txtAccueil">
            Retourner sur la page d'accueil
          </li>
        </button>
      </NavLink>
    </div>
  );
};

export default NoPage;
