import axios from "axios";
const apiData = "http://localhost:3000/UserMainDataMock.json";

async function getUserData(id) {
    const data = await (await axios.get(apiData)).data;
    return data;
}

export default getUserData;
