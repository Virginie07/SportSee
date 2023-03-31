import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUserData from "../services/ApiCall";
import Header from "../components/Header";
import VerticalBar from "../components/VerticalBar";
import Results from "../components/Results";
import calIcon from "../img/cal-icon.png";
import carbsIcon from "../img/carbs-icon.png";
import fatIcon from "../img/fat-icon.png";
import protIcon from "../img/protein-icon.png";
import "../styles/User.css";

const User = () => {

    const [sportUser, setSportUser] = useState([]);

  //   useEffect(() => {

  //   fetch("/UserMainDataMock.json")
  //   .then((response) => {return response.json()})
  //   .then((data) => {setSportUser(data)})

  // }, []);

    useEffect(() => {
      const fetchData = async () =>{
        const data = await getUserData();
        // const response = await getUserData();
        // const data = await response.data;
        // console.log(response);
        console.log(data);
        setSportUser(data);
      }
      fetchData();
  
    }, []);

    console.log(sportUser);

    const allParam = useParams();
    const paramId = allParam.id;
    const itemData = sportUser.find((element) => element.id === paramId);
    console.log(itemData);

    if (itemData) {
    return (
      <div className="user">
        <Header />

        <div className="user__para">
          <p className="user__para--accueil">
            Bonjour 
            <span className="user__para--name">
              {itemData?.userInfos?.firstName}
            </span>
          </p>

          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className="user__itemResults">
          <Results
            icon={calIcon}
            count={sportUser?.keyData?.calorieCount + "kCal"}
            denom={"Calories"}
          />
          <Results
            icon={protIcon}
            count={sportUser?.keyData?.proteinCount + "g"}
            denom={"Protéines"}
          />
          <Results
            icon={carbsIcon}
            count={sportUser?.keyData?.carbohydrateCount + "g"}
            denom={"Glucides"}
          />
          <Results
            icon={fatIcon}
            count={sportUser?.keyData?.lipidCount + "g"}
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

export default User;