import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getUserData } from "../services/ApiCall";
import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
  } from "recharts";
  import "../styles/ScoreChart.css";

const ScoreChart = () => {

      const dataTest = [
    {
      id: 1,
      score: 75,
    },
    // {
    //   id: 2,
    //   score: 50,
    // },
  ];

  // class myRecette{
  //   constructor(pId, pName, pServings, pIngredients, pTime, pDescription, pAppliance, pUstensils){
  //       this.aId = pId
  //       this.aName = pName.toLowerCase()
  //       this.aServings = pServings
  //       this.aIngredient = pIngredients
  //       this.aTime = pTime
  //       this.aDescription = pDescription.toLowerCase()
  //       this.aAppliance = pAppliance.toLowerCase()
  //       this.aUstensils = pUstensils
  //   }

  // const [user, setUser] = useState({});

  // const allParam = useParams();
  // const paramId = allParam.id;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getUserData(paramId);
  //     console.log("ma data", data);
  //     setUser(data);
  //   };
  //   fetchData();
  // }, [paramId]);

  // user.forEach((element, index) => {
  //   console.log(element);
  //   if (element.id === 2) {
  //     element.todayScore = 0.12;
  //   }
  // });

    return (
        <div className='scorechart'>
            <ResponsiveContainer width={300} height={300}>
                <RadialBarChart data={dataTest} domain={[0, 10]} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10}>

                    <RadialBar dataKey="score" minAngle={15} cornerRadius={50} label={{ position: 'insideStart', fill: 'red' }} barSize={10}/>
                    
                </RadialBarChart>               
            </ResponsiveContainer>
            
        </div>
    );
};

export default ScoreChart;