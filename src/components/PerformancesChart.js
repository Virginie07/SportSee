import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
    RadarChart,
    ResponsiveContainer,
    PolarGrid,
    PolarAngleAxis,
    Radar,
  } from "recharts";
import { getUsersDataPerf } from "../services/ApiCall";
import "../styles/PerformancesChart.css";

const PerformancesChart = () => {

    // const data = [
    //     {
    //         "kind": "cardio",
    //         "value": 80,
    //       },
    //       {
    //         "kind": "energy",
    //         "value": 120,
    //       },
    //       {
    //         "kind": "endurance",
    //         "value": 140,
    //       },
    //       {
    //         "kind": "strength",
    //         "value": 50,
    //       },
    //       {
    //         "kind": "speed",
    //         "value": 200,
    //       },
    //       {
    //         "kind": "intensity",
    //         "value": 90,
    //       }
    //   ];
    const [userPerf, setUserPerf] = useState([]);

    const allParam = useParams();
    const paramId = allParam.id;
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getUsersDataPerf(paramId);
        // console.log("data", data.sessions);
        // data.sessions.forEach((element, index) => {
        //   element.day = index + 1;
        // });
  
        setUserPerf(data.data);
      };
      fetchData();
    }, [paramId]);

    return (
        <div className='performanceschart'>
            <ResponsiveContainer width={300} height={300}>
                <RadarChart data={userPerf}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" stroke='#FFFFFF'/>
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6}/>
                </RadarChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default PerformancesChart;