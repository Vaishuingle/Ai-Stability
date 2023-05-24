import React, {useState, useContext} from "react";
//import React, { useState} from 'react';
import "./prediction.css";
// import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import Stack from '@mui/material/Stack';
import { GraphContext } from '../../Context/graphContext';
import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  LabelList
} from "recharts";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// import { PromiseProvider } from "mongoose";
let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 10,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
};


const data = {
  labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  datasets: [
    {
          label: "First dataset",
          data: [80, 100, 70, 80, 120, 80],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
    },
   
  ]
  
};
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100
  //   }
  // ];

  const dummyData = [
    { name: 'DB issue', value: 40 },
    { name: 'Printer Failure', value: 30 },
    { name: 'Order Stuck', value: 15 },
    { name: 'DB1 connection issue', value: 15 },
];
const sortedData = dummyData.sort((a, b) => b.value - a.value);
const highestValueSlice = sortedData[0];
const highestValueColor = "red";

function Prediction(props) {
  const {predictionData, setPredictionData} = useContext(GraphContext)
  console.log(predictionData)
// function Barchart({setOpenModal3, selected}) {
  // const [response, setResponse] = useState([]);

  const renderCustomizedLabelPercentage = (dummyData, total = 100) => {
    // console.log("Data", data);
    // console.log(data.value / total);
    // calculate percentage
    let percentageCalculated = (dummyData.value / total);
    return percentageCalculated.toFixed(2).replace(".", ".").toString() + "%";
  };

  const customColors = ["#2980B9", "#73C6B6", "#512E5F", "#546E7A ", "#003f5c"];
  return (
    <>
       <div className="modalBackground">
          <div className="modalContainer">
            <div className="body">
             <Stack direction="row" spacing={1.5}>
          
                 <Card className="card-chart">
               <CardHeader>
                <h5 className="card-category">Historical Trend</h5>
                {/* <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle> */}
          </CardHeader>
           <CardBody>
           <div className="chart-area">
            <ResponsiveContainer width={400}>
           
            <AreaChart
                width={730}
                height={350}
                data={predictionData}
                margin={{
                top: 5,
                right: 30,
                left:-20,
                bottom: 5
                      }}
              >
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="past_dates" />
             <YAxis />
             <Tooltip />
             <Area type="monotone" dataKey="past_count" stroke="#8884d8" fill="#8884d8" />
             </AreaChart>
            </ResponsiveContainer>
           
           {/* <LineChart width={730} height={250} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart> */}
           </div>
          
           </CardBody>
           </Card>
           
          
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Forecasted Trend</h5>
              
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <ResponsiveContainer width={400}>
            {/* <LineChart width={730} height={250} data={predictionData}
             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="predictions_date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="predicted_count" stroke="#8884d8" />
            </LineChart> */}
            <AreaChart
              width={730}
              height={250}
              data={predictionData}
              margin={{
              top: 5,
              right: 30,
              left: -20,
              bottom: 5
              }}
            >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Predicted_Date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Predicted_Count" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
            </ResponsiveContainer>
                {/* <LineChart width={730} height={250} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart> */}
                </div>
              </CardBody>
            </Card>
             <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Key System Issues</h5>
              
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <ResponsiveContainer width={400}>
                            <PieChart>
                                <Pie
                                    data={dummyData}
                                    margin={{
                                      top: -20,
                                      right: 30,
                                      left: -20,
                                      bottom: 5
                                      }}
                                    color="#000000"
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    fill="#8884d8"
                                >
                                    <LabelList
              dy={-3}
              fill="white" // Percentage color
              // dataKey="percentage"
              dataKey={renderCustomizedLabelPercentage}
              position="inside"
              angle="0"
              stroke="none" // Border of letters
              className="label-percentage"
            />
                                    {dummyData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry === highestValueSlice ? highestValueColor : customColors[index % customColors.length]}
                                            //fill={customColors[index % customColors.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="top" height={36} iconSize={10} />
                            </PieChart>
                        </ResponsiveContainer>
                
                </div>
              </CardBody>
            </Card> 
        
        </Stack>
        {/* <stack direction="row" spacing={2}>
        <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Key System Issues</h5>
              
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <ResponsiveContainer width={500}>
                            <PieChart>
                                <Pie
                                    data={dummyData}
                                    color="#000000"
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    fill="#8884d8"
                                >
                                    <LabelList
              dy={-3}
              fill="white" // Percentage color
              // dataKey="percentage"
              dataKey={renderCustomizedLabelPercentage}
              position="inside"
              angle="0"
              stroke="none" // Border of letters
              className="label-percentage"
            />
                                    {dummyData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={customColors[index % customColors.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="top" height={36} iconSize={10} />
                            </PieChart>
                        </ResponsiveContainer>
                
                </div>
              </CardBody>
            </Card> 
        </stack>
         */}
        
            {/* <Row>
              <col lg="12">
              <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <LineChart width={730} height={250} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
                </div>
              </CardBody>
            </Card>
              </col>
            </Row> */}
          </div>
        </div>
    </div>
    </>
    
    
  );
}

export default Prediction;
