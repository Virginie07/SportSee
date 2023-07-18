import React from "react";
import { NavLink } from "react-router-dom";
import LogoSportSee from "../img/Logo.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__contour">
        <div className="home__logo">
          <img className="home__logo--item" src={LogoSportSee} alt="logo" />
        </div>

        <div className="home__para">
          <ul>
            <li className="home__para--li">
              <NavLink to={`/User/12`} className="home__para--lienNav">
                Bonjour Karl
              </NavLink>
            </li>

            <li className="home__para--li">
              <NavLink to={`/User/18`} className="home__para--lienNav">
                Bonjour Cecilia
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
