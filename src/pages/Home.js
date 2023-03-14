import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import VerticalBar from "../components/VerticalBar";
import Results from "../components/Results";
import calIcon from "../img/cal-icon.png";
import carbsIcon from "../img/carbs-icon.png";
import fatIcon from "../img/fat-icon.png";
import protIcon from "../img/protein-icon.png";
import "../styles/Home.css";

const Home = () => {
  const [sportUser, setSportUser] = useState(null);

  // useEffect(() => {

  //   fetch("/UserMainDataMock.json")
  //   .then((response) => {return response.json()})
  //   .then((data) => {setSportUser(data)})

  // }, []);

  useEffect(() => {
    axios
      .get("/UserMainDataMock.json")
      .then((res) => {
        setSportUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(sportUser);

  // const allParam = useParams();
  // const paramId = allParam.id;
  // const itemData = sportUser.find((element) => element.id === paramId);

  if (sportUser) {
    return (
      <div className="home">
        <Header />

        <div className="home__para">
          <p className="home__para--accueil">
            Bonjour
            <span className="home__para--name">
              {/* {sportUser.userInfos.firstName} */}
              {sportUser.id}
            </span>
          </p>

          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className="home__itemResults">
          <Results
            icon={calIcon}
            count={sportUser.id + "kCal"}
            // count={sportUser.keyData.calorieCount + "kCal"}
            denom={"Calories"}
          />
          <Results
            icon={protIcon}
            count={sportUser.id + "g"}
            // count={sportUser.keyData.proteinCount + "g"}
            denom={"Protéines"}
          />
          <Results
            icon={carbsIcon}
            count={sportUser.id + "g"}
            // count={sportUser.keyData.carbohydrateCount + "g"}
            denom={"Glucides"}
          />
          <Results
            icon={fatIcon}
            count={sportUser.id + "g"}
            // count={sportUser.keyData.lipidCount + "g"}
            denom={"Lipides"}
          />
        </div>

        <VerticalBar />
      </div>
    );
  } else {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }
};

export default Home;
