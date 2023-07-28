import axios from "axios";

class performance {
  constructor(value, kind) {
    this.value = value;
    this.kind = kind;
  }
  getKind() {
    const kind = {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    };
    return kind[this.kind];
  }
}

class activity {
  constructor(day, kilogram, calories) {
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }

  getDay() {
    var dayDate = new Date(this.day);
    var dayNumber = dayDate.getDate();
    return dayNumber;
  }
}

class session {
  constructor(day, sessionLength) {
    this.day = day;
    this.sessionLength = sessionLength;
  }

  getWeek() {
    const tabWeek = ["L", "M", "M", "J", "V", "S", "D"];
    var weekDay = tabWeek[this.day - 1];
    return weekDay;
  }
}

function multipleScore(data) {
  var newScore = 0;
  if (data.todayScore) {
    newScore = data.todayScore * 100;
  } else if (data.score) {
    newScore = data.score * 100;
  }
  return newScore;
}

class utilisateur {
  constructor() {
    console.log("Création d'un utilisateur");
    this.performances = []; // contiendra des objets de la class performance
    this.activities = [];
    this.sessions = [];
    this.score = null;
    this.scoreRadialData = [];
  }

  populateScore(data) {
    var debug = false;
    this.score = multipleScore(data);
    this.scoreRadialData = [
      {
        score: 100,
        fill: "transparent",
      },
      {
        score: 0,
        fill: "red",
      },
    ];

    this.scoreRadialData[1].score = this.score;

    if (debug === true) {
      console.log(
        "%c%s%c this.score = %o",
        "color: pink;",
        "populateScore()",
        "",
        this.score
      );
    }
  }

  populatePerformances(data) {
    var debug = false;
    var self = this;
    // reset du tableau avant appel
    this.performances = [];
    data.forEach(function (element) {
      var _perf = new performance(element.value, element.kind);
      self.performances.push(_perf);
    });
    if (debug === true) {
      console.log(
        "%c%s%c this.performances = %o",
        "color: green;",
        "populatePerformances()",
        "",
        this.performances
      );
      this.performances.forEach((e) =>
        console.log("kind corrigé", e.getKind())
      );
    }
  }

  populateActivities(data) {
    var debug = false;
    var self = this;
    // reset du tableau avant appel
    this.activities = [];
    data.forEach(function (element) {
      var _act = new activity(element.day, element.kilogram, element.calories);
      self.activities.push(_act);
    });
    if (debug === true) {
      console.log(
        "%c%s%c this.activities = %o",
        "color: green;",
        "populateActivities()",
        "",
        this.activities
      );
      this.activities.forEach((e) => console.log("day corrigé", e.getDay()));
    }
  }

  populateSessions(data) {
    var debug = false;
    var self = this;
    // reset du tableau avant appel
    this.sessions = [];
    data.forEach(function (element) {
      var _sess = new session(element.day, element.sessionLength);
      self.sessions.push(_sess);
    });
    if (debug === true) {
      console.log(
        "%c%s%c this.sessions = %o",
        "color: green;",
        "populateSessions()",
        "",
        this.sessions
      );
      this.sessions.forEach((e) => console.log("week corrigé", e.getWeek()));
    }
  }
}

window.monUtilisateur = new utilisateur();

var myInterface = {
  getUrl: function () {
    if (this.mode === "dev") {
      return "http://localhost:3001";
      // const port = window.location.port;
      // const origin = window.location.origin;
      // return `${origin}:${port}`;
    }

    if (this.mode === "prod") {
      // const port = window.location.port;
      // const origin = window.location.origin;
      // return `${origin}:${port}`;
      return "http://localhost:3000";

      // const port = '3000';
      // const origin = 'http://localhost';
      // return `${origin}:${port}`;
    }
  },

  getEndpointDatas: function (userId) {
    if (this.mode === "dev") {
      return `${myInterface.getUrl()}/User${userId}MainDataMock.json`;
    }
    return `${myInterface.getUrl()}/user/${userId}`;
  },

  getEndpointScore: function (userId) {
    if (this.mode === "dev") {
      return `${myInterface.getUrl()}/User${userId}MainDataMock.json`;
    }
    return `${myInterface.getUrl()}/user/${userId}`;
  },

  getEndpointActivity: function (userId) {
    if (this.mode === "dev") {
      return `${myInterface.getUrl()}/User${userId}ActivityMock.json`;
    }
    return `${myInterface.getUrl()}/user/${userId}/activity`;
  },

  getEndpointSessions: function (userId) {
    if (this.mode === "dev") {
      return `${myInterface.getUrl()}/User${userId}AverageSessionsMock.json`;
    }
    return `${myInterface.getUrl()}/user/${userId}/average-sessions`;
  },

  getEndpointPerf: function (userId) {
    if (this.mode === "dev") {
      return `${myInterface.getUrl()}/User${userId}PerformanceMock.json`;
    }
    return `${myInterface.getUrl()}/user/${userId}/performance`;
  },
};

// myInterface.mode = "dev";
myInterface.mode = "prod";

function casErreur(error) {
  if (error.response) {
    console.log("erreur reponse", error.response.data);
  } else if (error.request) {
    console.log("erreur requete", error.request);
  } else {
    console.log("message erreur", error.message);
  }
  window.location.replace("/Error");
}

/**
 * Export users data with id
 * @param { Number } id
 * @returns { Object }
 */

export async function getUserData(id) {
  var dataResult = "";
  var url = myInterface.getEndpointDatas(id);

  const axiosResult = await (
    await axios.get(url).catch((error) => casErreur(error))
  ).data;
  dataResult = axiosResult.data;

  return dataResult;
}

/**
 * Export score datas with id
 * @param { Number } id
 * @returns { Object }
 */

export async function getUsersDataScore(id) {
  var dataResult = "";
  var url = myInterface.getEndpointScore(id);

  const axiosResult = await (
    await axios.get(url).catch((error) => casErreur(error))
  ).data;
  dataResult = axiosResult.data;
  window.monUtilisateur.populateScore(dataResult);

  return dataResult;
}

/**
 * Export activity datas with id
 * @param { Number } id
 * @returns { Array }
 */

export async function getUsersDataAct(id) {
  console.log("getUsersDataAct(id)");
  var dataResult = "";
  var url = myInterface.getEndpointActivity(id);

  const axiosResult = await (
    await axios.get(url).catch((error) => casErreur(error))
  ).data;
  dataResult = axiosResult.data;
  window.monUtilisateur.populateActivities(dataResult.sessions);

  return dataResult;
}

/**
 * Export sessions datas with id
 * @param { Number } id
 * @returns { Array }
 */

export async function getUsersDataSessions(id) {
  var dataResult = "";
  var url = myInterface.getEndpointSessions(id);

  const axiosResult = await (
    await axios.get(url).catch((error) => casErreur(error))
  ).data;
  dataResult = axiosResult.data;
  window.monUtilisateur.populateSessions(dataResult.sessions);

  return dataResult;
}

/**
 * Export perfomances datas with id
 * @param { Number } id
 * @returns { Object }
 */

export async function getUsersDataPerf(id) {
  var dataResult = "";
  var url = myInterface.getEndpointPerf(id);

  const axiosResult = await (
    await axios.get(url).catch((error) => casErreur(error))
  ).data;
  dataResult = axiosResult.data;
  window.monUtilisateur.populatePerformances(dataResult.data);
  
  return dataResult;
}

window.test = {};
window.test.myInterface = myInterface;
window.test.getUserData = getUserData;
window.test.getUsersDataScore = getUsersDataScore;
window.test.getUsersDataAct = getUsersDataAct;
window.test.getUsersDataSessions = getUsersDataSessions;
window.test.getUsersDataPerf = getUsersDataPerf;

// function (error) {
//   if (error.response) {
//     // la requête a été faite et le code de réponse du serveur n’est pas dans
//     // la plage 2xx
//     console.log(
//       "1er log, erreur reponse, contient la data",
//       error.response.data
//     );
//     console.log(
//       "2eme log, erreur reponse,contient le statut",
//       error.response.status
//     );
//     console.log("3eme log, erreur reponse, ???", error.response.headers);

//     console.log("test redirection", redirect);
//     //  window.location = '/Error';
//     // window.location.assign('/Error');
//     window.location.replace("/Error");
//   } else if (error.request) {
//     // la requête a été faite mais aucune réponse n’a été reçue
//     // `error.request` est une instance de XMLHttpRequest dans le navigateur
//     // et une instance de http.ClientRequest avec node.js
//     console.log("4eme log, erreur requete", error.request);

//     // window.location = 'http://localhost:3001/Error';
//     // window.location.assign('/Error');
//     window.location.replace("/Error");
//   } else {
//     // quelque chose s’est passé lors de la construction de la requête et cela
//     // a provoqué une erreur
//     console.log("Error", error.message);

//     // window.location = 'http://localhost:3001/Error';
//     // window.location.assign('/Error');
//     window.location.replace("/Error");
//   }
//   console.log(error.config);
// })
