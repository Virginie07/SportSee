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
import "../styles/SessionsChart.scss";

const SessionsChart = () => {
  const [userSessions, setUserSessions] = useState([]);

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDataSessions(paramId);
      setUserSessions(window.monUtilisateur.sessions);
    };
    fetchData();
  }, [paramId]);

  const renderLegend = () => {
    return (
      <div className="legendSession">
        <p className="legendSession__titre">
          Durée moyenne des <br /> sessions
        </p>
      </div>
    );
  };

  const renderTooltip = (...args) => {
    const maValeur = args[0];
    if (maValeur.active == true) {
      return (
        <div className="tool">
          <p className="tool__titre">
            {maValeur.payload[0].payload.sessionLength} min
          </p>
        </div>
      );
    }
  };

  const renderWeek = (e) => {
    return e.getWeek();
  };

  return (
    <div className="LineChart">
      <ResponsiveContainer
        className="LineChart__container"
        width="100%"
        height={300}
      >
        <LineChart data={userSessions}>
          <XAxis
            dataKey={renderWeek}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF" }}
            tickMargin={-10}
            padding={{ left: 20, right: 20, top: 10 }}
          />
          <YAxis hide={true} domain={["dataMin - 100", "dataMax + 100"]} />
          <Tooltip content={renderTooltip} />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
          />
          <Legend verticalAlign="top" content={renderLegend} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
