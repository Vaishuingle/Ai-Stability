//import React from "react";
import React, { useState, useEffect} from 'react';
import "./modal5.css";
let progressInterval = null;
function Modal5({setOpenModal5,message}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress(prev => prev + 1);
    },30);
  }, []);
  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
      //setOpenModal4(false)
      setOpenModal5(false)
      
    }
  }, [progress]);
  const close = async (event) => {
    setOpenModal5(false);
   
  }
  
  return (
    <div className="modalBackground51">
    <div className="modalContainer5">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal5(false);
          }}
        >
          X
        </button>
      </div>
      
      <div className="body5">
    
        <p>{message}</p>
        
        
        
      </div>
      
      <div className="footer5">
        <button
          className="btn btnGreen"
          onClick={(event) => close(event)}
          id="okBtn"
        >
          Close
        </button>
       
      </div>
    </div>
  </div>
  
);
}

export default Modal5;
