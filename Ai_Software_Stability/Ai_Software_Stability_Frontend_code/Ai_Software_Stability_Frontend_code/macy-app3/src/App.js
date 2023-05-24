import React, { useState, useEffect, Fragment, useRef,useContext } from "react";
import { nanoid } from "nanoid";
import './App.css';
import Input from "./components/input/Input";
import Dashboard from "./components/dashboard/Dashboard";
import Prediction from "./components/prediction/Prediction";
import Actual from "./components/actual/Actual";
import FunnelChart from "./components/funnelChart/FunnelChart";
import Training_dataset from './components/training_dataset/Training_dataset';
import Trigramdf from './components/trigramdf/Trigramdf';
import Modal4 from './components/modal4/Modal4';
import Modal5 from './components/modal5/Modal5';
import BasicButtons from "./components/ButtonsCont/ButtonsCont";
import CustomNavbar from "./components/Navbar/Navbar";
import {GraphDataContextProvider} from './Context/graphContext';
import { Container, Grid } from "@mui/material";
import { GraphContext } from './Context/graphContext';
import { Stack } from "@mui/material";
import Wrapper from "./Layouts/Wrapper/Wrapper";
const App = () => {
  
  const [file, setFile] = useState(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [training_datasetOpen, setTraining_datasetOpen] = useState(false);
  const [funnelChartOpen, setFunnelChartOpen] = useState(false);
  const [modalOpen8, setModalOpen8] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);
  const[message,setMessage] = useState(null)
  const[tabularData, setTabularData] = useState(null)
  function handleChange(event) {
      setFile(event.target.files[0])
  }
  
  
  const fetchData = async () => {
    //setIsShown(current => !current);
    
    
  }
  return (
    <div className="App">
      <GraphDataContextProvider>
      {/* {training_datasetOpen && <Training_dataset setOpenTraining_dataset={setTraining_datasetOpen} setModalOpen4 = {setModalOpen4} setModalOpen5 = {setModalOpen5} message={message} setMessage={setMessage}/>} */}
      {/* {modalOpen8 && <Trigramdf setOpenModal8={setModalOpen8} setFunnelChartOpen={setFunnelChartOpen} tabularData={tabularData} setTabularData={setTabularData}/>} */}
      {modalOpen4 && <Modal4 setOpenModal4={setModalOpen4}/>}
      {modalOpen5 && <Modal5 setOpenModal5={setModalOpen5} message={message}/>}
      {funnelChartOpen && <FunnelChart setOpenFunnelChart = {setFunnelChartOpen} tabularData={tabularData} setTabularData={setTabularData}/>}
      <CustomNavbar/>
      <Wrapper/>
      
      </GraphDataContextProvider>
    </div>
  );
}

export default App;
