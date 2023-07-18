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
  const [userActivity, setUserActivity] = useState([]);

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDataAct(paramId);
      setUserActivity(window.monUtilisateur.activities);
    };
    fetchData().catch((e) => console.log(e));
  }, [paramId]);

  const renderLegend = () => {
    return (
      <div className="legend">
        <p className="legend__titre">Activité quotidienne</p>
        <ul className="legend__list">
          <li className="legend__list--item legend__list--itemPoids">
            <span className="legend__list--itemitem">Poids (kg)</span>
          </li>
          <li className="legend__list--item legend__list--itemCal">
            <span className="legend__list--itemitem">
              Calories brûlées (kcal)
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const renderActTooltip = (...args) => {
    const maValeur = args[0];
    console.log('valeur');
    if (maValeur.active === true) {
      return (
        <div className="tool">
          <p className="tool__titre">
            texte essai
          </p>
        </div>
      );
    }
  };

  const renderDay = (e) => {
    return e.getDay();
  };

  return (
    <div className="barchart">
      <ResponsiveContainer className="barchart__graph" width="95%" height={300}>
        <BarChart data={userActivity}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey={renderDay} />
          <YAxis orientation="right" />
          <Tooltip content={renderActTooltip}/>
          <Legend
            iconType="circle"
            verticalAlign="top"
            content={renderLegend}
          />
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