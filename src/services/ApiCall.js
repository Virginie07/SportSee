import axios from "axios";
const apiData = "http://localhost:3000/UserMainDataMock.json";
const apiDataActivity = "http://localhost:3000/UserActivityMock.json";
const apiDataSessions = "http://localhost:3000/UserAverageSessionsMock.json";
const apiDataPerf = "http://localhost:3000/UserPerformanceMock.json";

// Fonction qui exporte toutes les UserMainData
export async function getUsersData() {
  const data = await (await axios.get(apiData)).data;
  return data;
}

// Fonction qui exporte les UserMainData en fonction de l'id
export async function getUserData(id) {
  const users = await (await axios.get(apiData)).data;
  const data = users.find((user) => user.id.toString() === id.toString());
  return data;
}

// Fonction qui exporte les datas Activity en fonction de l'id
export async function getUsersDataAct(id) {
  const usersAct = await (await axios.get(apiDataActivity)).data;
  const data = await usersAct.find(
    (user) => user.userId.toString() === id.toString()
  );
  return data;
}

// Fonction qui exporte les datas Average Sessions en fonction de l'id
export async function getUsersDataSessions(id) {
  const usersSessions = await (await axios.get(apiDataSessions)).data;
  const data = await usersSessions.find(
    (user) => user.userId.toString() === id.toString()
  );
  return data;
}

// Fonction qui exporte les datas Performances en fonction de l'id
export async function getUsersDataPerf(id) {
  const usersPerf = await (await axios.get(apiDataPerf)).data;
  const data = await usersPerf.find(
    (user) => user.userId.toString() === id.toString()
  );
  return data;
}


