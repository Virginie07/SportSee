import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsersDataSessions } from "../services/ApiCall";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import "../styles/SessionsChart.css";

const SessionsChart = () => {
  // const data = [
  //   { day: "L", sessionLength: 30 },
  //   { day: "M", sessionLength: 23 },
  //   { day: "M", sessionLength: 45 },
  //   { day: "J", sessionLength: 50 },
  //   { day: "V", sessionLength: 0 },
  //   { day: "S", sessionLength: 0 },
  //   { day: "D", sessionLength: 60 },
  // ];

  const [userSessions, setUserSessions] = useState([]);

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDataSessions(paramId);
      console.log("data", data.sessions);
      // data.sessions.forEach((element, index) => {
      //   element.day = index + 1;
      // });

      setUserSessions(data.sessions);
    };
    fetchData();
  }, [paramId]);


  return (
    <div className="LineChart">

      <ResponsiveContainer width={300} height={300}>
        <LineChart data={userSessions}>
          <XAxis dataKey="day"/>
          <YAxis hide={true}/>
          <Tooltip/>
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="#FFFFFF"
            strokeWidth={4}
            dot={false}
            // activeDot={{
            //   fill: "#FFFFFF",
            //   r: 4,
            //   strokeWidth: 8,
            //   strokeOpacity: 0.5,
            // }}
          />
          <Legend verticalAlign="top"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
