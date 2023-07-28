import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { getUsersDataPerf } from "../services/ApiCall";
import "../styles/PerformancesChart.scss";

const PerformancesChart = () => {
  const [userPerf, setUserPerf] = useState([]);

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDataPerf(paramId);
      setUserPerf(window.monUtilisateur.performances);
    };
    fetchData();
  }, [paramId]);

  const renderKind = (e) => {
    return e.getKind();
  };

  return (
    <div className="performanceschart">
      <ResponsiveContainer
        className="performanceschart__container"
        width="100%"
        height={300}
      >
        <RadarChart data={userPerf} outerRadius={80} className="radarChart">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey={renderKind} stroke="#FFFFFF" />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformancesChart;
