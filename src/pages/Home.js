import React from "react";
import { NavLink } from "react-router-dom";
import LogoSportSee from '../img/Logo.png';
import "../styles/Home.css";

const Home = () => {
  return (
    <>
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
    </>
  );
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

  // const [allSportUsers, setAllSportUsers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getUsersData();
  //     // const response = await getUserData();
  //     // const data = await response.data;
  //     // console.log(response);
  //     console.log("data", data);
  //     setAllSportUsers(data);
  //   }; 
  //   fetchData();
  // }, []);

  //   useEffect(() => {
  //     async function getStoreData(){
  //         const {data} = await axios.get(apiData);
  //         console.log('mon data', data);
  //         setSportUser(data);
  //     }
  //     getStoreData();
  // }, []);

{/* <div className="home__para">
            {allSportUsers && allSportUsers.length > 0 ? (
              allSportUsers.map((user) => (
                <ul>
                  <li className="home__para--li">
                    <NavLink to={`/User/${user.id}`} className="home__para--lienNav">
                      Bonjour {user.userInfos.firstName}
                    </NavLink>
                    <NavLink to={`/User/12`} className="home__para--lienNav">
                      Bonjour Karl
                    </NavLink>                 
                  </li>

                  <li className="home__para--li">
                    <NavLink to={`/User/${user.id}`} className="home__para--lienNav">
                      Bonjour {user.userInfos.firstName}
                    </NavLink>
                    <NavLink to={`/User/18`} className="home__para--lienNav">
                      Bonjour Cecilia
                    </NavLink>                 
                  </li>
                </ul>
              ))
            ) : (
              <p>Pas d'utilisateur pour le moment</p>
            )}
          </div> */}