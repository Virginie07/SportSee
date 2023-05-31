import axios from "axios";
// const apiData = "http://localhost:3001/UserMainDataMock.json";
// const apiDataActivity = "http://localhost:3001/UserActivityMock.json";
// const apiDataSessions = "http://localhost:3001/UserAverageSessionsMock.json";
// const apiDataPerf = "http://localhost:3001/UserPerformanceMock.json";
// const apiTest = "http://localhost:3000/user/12/activity";


var myInterface = {
  mode:"dev",
  getUrl:function () {
   // window location recuperer la partie host et la partie port et retourner la partie host+port
  if (this.mode=== 'dev') {
    const port = window.location.port;
    const origin = window.location.origin;
    return 'http://localhost:3001';
  }
    
  if (this.mode=== 'prod') {
    const port = '3000';
    const origin = 'http://localhost';
    return `${origin}:${port}`;
  }
    
  },
  getEndpointActivity: function (userId) {
    if (this.mode === 'dev'){
      return `${myInterface.getUrl()}/UserActivityMock.json`
    }
    return `${myInterface.getUrl()}/${userId}/activity`
  }
}

console.log('interface %o', myInterface)
console.log('interface %o', myInterface.mode)
console.log('interface %o', myInterface.getUrl())
console.log('windows %o', window.location)
console.log('interface %o', myInterface.getEndpointActivity(12))
myInterface.mode = 'prod';
console.log('interface %o', myInterface.getEndpointActivity(12))

// creation d'un user par mock, url dynamique meme en mode dev

// je cree apres un mode "prod" qui lui prendra en compte l'api du backend
// dans mes fonction au lieu d'appeler apiData j'appellerai interface.getEndPointActivity etc


var mode = '';

/**
 * Export users data with id
 * @param { Number } id 
 * @returns { Object }
 */


export async function getUserData(id) {
  var myUrl = '';
  var dataResult = '';
  // var url = myInterface.getEndpointUserData(id);
  mode = 'dev';
  // mode = 'prod';
  
  if (mode === 'dev') {
    myUrl = 'http://localhost:3001/UserMainDataMock.json';
    const dataAxios = await (await axios.get(myUrl)).data;
    const axiosResult = dataAxios.find((user) => user.id.toString() === id.toString());
    dataResult = axiosResult;
   console.log('test mock', dataResult);
    
  }else if (mode === 'prod') {
    myUrl = 'http://localhost:3000/user/12';
    const axiosResult = await (await axios.get(myUrl)).data;
    dataResult = axiosResult.data;
    
  }else{
    return (
      <div>
        <p>ErrorAPI</p>
      </div>
    )
  }
  return dataResult;
}

/**
 * Export activity datas with id
 * @param { Number } id 
 * @returns { Array }
 */

export async function getUsersDataAct(id) {
  var myUrl = '';
  var dataResult = '';
  // mode = 'dev';
  mode = 'prod';
  
  if (mode === 'dev') {
    myUrl = 'http://localhost:3001/UserActivityMock.json';
    const dataAxios = await (await axios.get(myUrl)).data;
    const axiosResult = await dataAxios.find(
    (user) => user.userId.toString() === id.toString()  
    );
    dataResult = axiosResult;
    console.log("%c%s%c element:%o", "color: purple;", "fonction: getUsersDataAct", "", dataResult);
    
  }else if (mode === 'prod') {
    myUrl = 'http://localhost:3000/user/12/activity';
    const axiosResult = await (await axios.get(myUrl)).data;
    dataResult = axiosResult.data;
    console.log("%c%s%c element:%o", "color: yellow;", "fonction: getUsersDataAct", "", dataResult);
  }else{
    return (
      <div>
        <p>ErrorAPI</p>
      </div>
    )
  }
  return dataResult;
}

/**
 * Export sessions datas with id
 * @param { Number } id 
 * @returns { Array }
 */

export async function getUsersDataSessions(id) {
  var myUrl = '';
  var dataResult = '';
  // mode = 'dev';
  mode = 'prod';
  
  if (mode === 'dev') {
    myUrl = 'http://localhost:3001/UserAverageSessionsMock.json';
    const dataAxios = await (await axios.get(myUrl)).data;
    const axiosResult = await dataAxios.find(
    (user) => user.userId.toString() === id.toString()  
    );
    dataResult = axiosResult;
    
  }else if (mode === 'prod') {
    myUrl = 'http://localhost:3000/user/12/average-sessions';
    const axiosResult = await (await axios.get(myUrl)).data;
    dataResult = axiosResult.data;
    
  }else{
    return (
      <div>
        <p>ErrorAPI</p>
      </div>
    )
  }
  return dataResult;
}


/**
 * Export perfomances datas with id
 * @param { Number } id 
 * @returns { Object }
 */

export async function getUsersDataPerf(id) {
  var myUrl = '';
  var dataResult = '';
  // mode = 'dev';
  mode = 'prod';
  
  if (mode === 'dev') {
    myUrl = 'http://localhost:3001/UserPerformanceMock.json';
    const dataAxios = await (await axios.get(myUrl)).data;
    const axiosResult = await dataAxios.find(
    (user) => user.userId.toString() === id.toString()  
    );
    dataResult = axiosResult;
    
  }else if (mode === 'prod') {
    myUrl = 'http://localhost:3000/user/12/performance';
    const axiosResult = await (await axios.get(myUrl)).data;
    dataResult = axiosResult.data;
    
  }else{
    return (
      <div>
        <p>ErrorAPI</p>
      </div>
    )
  }
  return dataResult;
}




// export async function getUserData(id) {
//   const users = await (await axios.get(apiData)).data;
//   const data = users.find((user) => user.id.toString() === id.toString());
//   return data;
// }

// export async function getUsersDataAct(id) {
//   const usersAct = await (await axios.get(apiDataActivity)).data;
//   const data = await usersAct.find(
//     (user) => user.userId.toString() === id.toString()
//   );
//   return data;
// }

// export async function getUsersDataSessions(id) {
//   const usersSessions = await (await axios.get(apiDataSessions)).data;
//   const data = await usersSessions.find(
//     (user) => user.userId.toString() === id.toString()
//   );
//   return data;
// }

// // export async function getUsersDataPerf(id) {
// //   const usersPerf = await (await axios.get(apiDataPerf)).data;
// //   const data = await usersPerf.find(
// //     (user) => user.userId.toString() === id.toString()
// //   );
// //   return data;
// }