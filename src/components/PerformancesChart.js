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

    const [userPerf, setUserPerf] = useState([]);

    const allParam = useParams();
    const paramId = allParam.id;
    
    useEffect(() => {
      const fetchData = async () => {
        const data = await getUsersDataPerf(paramId);
        // console.log(data.kind);
        // console.log(data.kind[1]);
        // var newKind = data.kind[data.data.kind];
        // _kind = newKind;
        

        data.data.forEach((element) => {
          var elementKind = element.kind;
          var newKind = data.kind[elementKind];
          // console.log(newKind);
          element._kind = newKind;
          // console.log(weekDay);
        });
  
  
        setUserPerf(data.data);
      };
      fetchData();
    }, [paramId]);

    return (
        <div className='performanceschart'>
            <ResponsiveContainer width={350} height={300}>
                <RadarChart data={userPerf} className='radarChart'>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="_kind" stroke='#FFFFFF'/>
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6}/>
                </RadarChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default PerformancesChart;

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