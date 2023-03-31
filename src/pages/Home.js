import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getUserData from "../services/ApiCall";
import Header from "../components/Header";
import VerticalBar from "../components/VerticalBar";
import "../styles/Home.css";
// const apiData = "http://localhost:3000/UserMainDataMock.json";


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
            <p>Bonjour, veuillez choisir l'utilisateur:</p>
            <NavLink to={"/User/" + "{sportUser.id}"} className="home__para--lienNav">Utilisateur 12</NavLink>
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