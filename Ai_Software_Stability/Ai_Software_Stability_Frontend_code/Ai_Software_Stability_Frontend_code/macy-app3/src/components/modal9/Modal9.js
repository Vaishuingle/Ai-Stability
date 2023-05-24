//import React from "react";
import React, { useState, useEffect} from 'react';
import Modal5 from '../modal4/Modal4';
import "./modal8.css";
let progressInterval = null;
// function Modal4({ props }) {
function Modal8({ setOpenModal8, setModalOpen5,}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress(prev => prev + 1);
    }, 500);
  }, []);
  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
      //setOpenModal4(false)
      //setModalOpen5(true)
    }
  }, [progress]);
  return (
    <div className="modalBackground">
      <div className="modalContainer4">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal8(false);
            }}
          >
            X
          </button>
        </div>
       
        <div className="body4">
        
        <p>Data generation is in progress. Please wait</p>
       
        <br></br>
        {/* <div classname="progress w-50" style={{height:"30px"}}>
        <div classname="progress-bar" role="progressbar" style={{width:`${progress}%`}}>{progress}%
        </div>
        </div> */}
        {/* <p> " THE DATA IS SENT TO THE DATABASE "</p> */}
        
        <div className="footer4">
          <button className="btn btnGreen" 
            onClick={() => {
              setOpenModal8(false);
              setModalOpen5(true)
            }}
            //id="cancelBtn"
          >
            Ok
          </button>
         </div>
      </div>
    </div>
    </div>
  );
}

export default Modal8;
