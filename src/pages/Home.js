import React, { useEffect, useState } from "react";
import axios from "axios";
import getUserData from "../services/ApiCall";
import Header from "../components/Header";
import VerticalBar from "../components/VerticalBar";
import Results from "../components/Results";
import calIcon from "../img/cal-icon.png";
import carbsIcon from "../img/carbs-icon.png";
import fatIcon from "../img/fat-icon.png";
import protIcon from "../img/protein-icon.png";
import "../styles/Home.css";
const apiData = "http://localhost:3000/UserMainDataMock.json";


const Home = () => {
  const [sportUser, setSportUser] = useState({});

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

//   useEffect(() => {
//     async function getStoreData(){
//         const {data} = await axios.get(apiData);
//         console.log('mon data', data);
//         setSportUser(data);
//     }
//     getStoreData();
// }, []);



  if (sportUser) {
    return (
      <div className="home">
        <Header />

        <div className="home__para">
          <p className="home__para--accueil">
            Bonjour 
            <span className="home__para--name">
              {sportUser?.userInfos?.firstName}
            </span>
          </p>

          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className="home__itemResults">
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

export default Home;




// useEffect(() => {

  //   fetch("/UserMainDataMock.json")
  //   .then((response) => {return response.json()})
  //   .then((data) => {setSportUser(data)})

  // }, []);


  // useEffect(() => {
  //   axios
  //     .get("/UserMainDataMock.json")
  //     .then((res) => {
  //       setSportUser(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(sportUser);

  // const allParam = useParams();
  // const paramId = allParam.id;
  // const itemData = sportUser.find((element) => element.id === paramId);

  // useEffect(() => {

//     fetchUsers();

//   },);

//   const fetchUsers = async () => {
//     const res = await fetch(`http://localhost:3004/UserMainDataMock.json`)
//     const data= await res.json();
//     console.log("data", data.data);
//     setSportUser(data.data)
//     console.log("users", sportUser);
//   }

//   useEffect(() => {
//     async function getStoreData(){
//         const response=await axios.get(apiData);
//         console.log(response);
//         setSportUser(response.data[0]);
//     }
//     getStoreData();
// }, []);