import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsersDataScore } from "../services/ApiCall";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import "../styles/ScoreChart.css";

const ScoreChart = () => {
  const [userRadial, setUserRadial] = useState();

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsersDataScore(paramId);
      setUserRadial(window.monUtilisateur.scoreRadialData);
    };
    fetchData();
  }, [paramId]);

  var score = window.monUtilisateur.scoreRadialData[1]?.score;

  if (score >= 0) {
    return (
      <div className="scorechart">
        <ResponsiveContainer className="scorechart__container" width="100%" height={300}>
          <RadialBarChart
            data={userRadial}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={-360}
            barSize={10}
            innerRadius={50}
          >
            <RadialBar dataKey="score" minAngle={30} cornerRadius={10} />
            <Legend
              content={() => (
                <div className="legend">
                  <p className="legend__titre">{score}%</p>
                  <p className="legend__titreSuite">de votre objectif</p>
                </div>
              )}
              layout="vertical"
              verticalAlign="middle"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return <div className="scorechart"></div>;
  }
};

export default ScoreChart;
