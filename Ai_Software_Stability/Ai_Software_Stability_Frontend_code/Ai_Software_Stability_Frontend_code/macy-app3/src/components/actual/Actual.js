import React, {useState} from "react";
//import React, { useState} from 'react';
import "./actual.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Label,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
// import { PromiseProvider } from "mongoose";

  
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

function Prediction(props) {
// function Barchart({setOpenModal3, selected}) {
  // const [response, setResponse] = useState([]);
  return (
    
    <div className="modalBackground">
     <div className="modalContainer">
         <div className="body">
        
         {/* <label>{selected}</label> */}
        <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range">
      {/* <Label
         style={{
             textAnchor: "middle",
             fontSize: "110%",
             fill: "blue",
             position:"absolute",
             top:"100px",
             marginTop:"400px"
         }}
      angle={360} 
      value={"Range"} />
       */}
      </XAxis>
      <YAxis>
      <Label
         style={{
             textAnchor: "middle",
             fontSize: "110%",
             fill: "blue",
             position:"absolute",
             left:"100px",

             marginTop:"400px"
         }}
      angle={270} 
      value={"Frequency_percentage"} />
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
          </div>
        </div>
    </div>
    
  );
}

export default Prediction;
