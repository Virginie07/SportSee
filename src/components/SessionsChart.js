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
  const [userSessions, setUserSessions] = useState([]);

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDataSessions(paramId);

      const tabWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      // console.log(tabWeek[0]);

      data.sessions.forEach((element) => {
        var elementWeekDay = element.day;
        var weekDay = tabWeek[elementWeekDay-1];
        // console.log(elementWeekDay);
        element._day = weekDay;
        // console.log(weekDay);
      });

      console.log("%c%s%c element:%o", "color: red;", "fonction: useEffectSession", "", data);


      setUserSessions(data.sessions);
    };
    fetchData();
  }, [paramId]);

  const renderLegend = () => {
    return(
      <div className="legendSession">
        <p className="legendSession__titre">Durée moyenne des sessions</p>
      </div>
    )
  }

  return (
    <div className="LineChart">
      <ResponsiveContainer width={300} height={300}>
        <LineChart data={userSessions}>
          <XAxis dataKey="_day" axisLine={false} tickLine={false} />
          <YAxis hide={true} domain={[0, "dataMax + 100"]}/>
          <Tooltip />
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
          <Legend verticalAlign="top" content={renderLegend}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
