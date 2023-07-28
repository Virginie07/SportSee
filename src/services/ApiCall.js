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

// Données pour le graphique ActivityChart
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

// Données pour le graphique SessionChart
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

// Données pour le graphique ScoreChart
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
    this.performances = []; // contiendra des objets de la class performance
    this.activities = []; // contiendra des objets de la class activity
    this.sessions = []; // contiendra des objets de la class session
    this.score = null; // contiendra des objets de la class score
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
    }

    if (this.mode === "prod") {
      return "http://localhost:3000";
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
 * @returns { Object }
 */

export async function getUsersDataAct(id) {
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
 * @returns { Object }
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
