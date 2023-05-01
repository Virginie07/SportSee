import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsersDataAct } from "../services/ApiCall";
import {
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import "../styles/ActivityChart.css";

const ActivityChart = () => {
  // const userActivity = [
  //   { day: 1, poids: 40, "Calories brûlées": 20 },
  //   { day: 2, poids: 50, "Calories brûlées": 40 },
  //   { day: 3, poids: 90, "Calories brûlées": 60 },
  //   { day: 4, poids: 70, "Calories brûlées": 10 },
  //   { day: 5, poids: 30, "Calories brûlées": 25 },
  //   { day: 6, poids: 40, "Calories brûlées": 15 },
  //   { day: 7, poids: 20, "Calories brûlées": 5 },
  //   { day: 8, poids: 20, "Calories brûlées": 5 },
  //   { day: 9, poids: 20, "Calories brûlées": 5 },
  //   { day: 10, poids: 20, "Calories brûlées": 5 },
  // ];

  
  const [userActivity, setUserActivity] = useState([]);

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDataAct(paramId);
      // console.log("data", data.sessions);
      data.sessions.forEach((element, index) => {
        element.day = index + 1;
      });

      setUserActivity(data.sessions);
    };
    fetchData();
  }, [paramId]);

  return (
    <div>
      <ResponsiveContainer className="barchart" width={900} height={300}>
        <BarChart data={userActivity}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend iconType="circle" verticalAlign="top" />
          <Bar
            dataKey="kilogram"
            barSize={10}
            fill="dark"
            radius={[5, 5, 0, 0]}
          />
        
          <Bar
            dataKey="calories"
            barSize={10}
            fill="red"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;