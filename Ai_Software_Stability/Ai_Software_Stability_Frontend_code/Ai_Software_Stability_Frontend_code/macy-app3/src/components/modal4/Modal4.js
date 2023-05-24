//import React from "react";
import React, { useState, useEffect} from 'react';
//import Modal5 from '../../components/modal5/Modal5';
import "./modal4.css";
let progressInterval = null;
// function Modal4({ props }) {
function Modal4({ setOpenModal4, setModalOpen4, message2 }) {
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
    <div className="modalBackground41">
      <div className="modalContainer4">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal4(false);
            }}
          >
            X
          </button>
        </div>
       
        <div className="body4">
        
        <p>Model training is in progress.  Please wait</p>
        {/* <p><b>Please wait</b></p> */}
        <br></br>
        {/* <div classname="progress w-50" style={{height:"30px"}}>
        <div classname="progress-bar" role="progressbar" style={{width:`${progress}%`}}>{progress}%
        </div>
        </div> */}
        {/* <p> " THE DATA IS SENT TO THE DATABASE "</p> */}
        
        <div className="footer4">
          <button className="btn btnGreen"
            onClick={() => {
              setOpenModal4(false);
              //setModalOpen5(true)
            }}
            id="okBtn"
          >
            Ok
          </button>
         </div>
      </div>
    </div>
    </div>
  );
}

export default Modal4;
