//import React from "react";
import React, { useState, useEffect} from 'react';
import "./training_dataset.css";


function Training_dataset({setOpenTraining_dataset,
  setModalOpen4,
  setModalOpen5,
  message,
  setMessage}) 
{
  const [file, setFile] = useState(null)
  const [lookBack, setLookBack] = useState();
  const [futurePrediction, setFuturePrediction] = useState();
  // const [message, setMessage] = useState(null);
  //const [selected72, setSelected72] =useState();
  const handleChange= event => {
    setFile(event.target.files[0])
    event.preventDefault();

  };
  const handleChange71 = event => {
    setLookBack(event.target.value);
    event.preventDefault();

  };
 
  const handleChange72 = event => {
    setFuturePrediction(event.target.value);
    event.preventDefault();

  };
 
  const downloadData = async (event) => {
    setOpenTraining_dataset(false);
    setModalOpen4(true);
    const formData = new FormData();
    formData.append("csv_file", file);
    formData.append("look_back", lookBack);
    formData.append("future_prediction", futurePrediction);
    try{
      const response = await fetch("http://localhost:8000/Read_csv_site_Name", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json"
        // "Content-Type": "multipart/form-data"
      },
     
      body: formData
    });

    const blob = await response.json();
    if (response.status === 200) {
         setMessage(blob);
         console.log(message)
         return blob;
    }
    }catch (error) {
    return error.message
  }
  }

  
  const dummy1 = async(event) => {
    const res = await downloadData(event);
   
    console.log(res);
    setTimeout(() => {
     //setMessage(res)
    },2000);
    setModalOpen4(false)
    setModalOpen5(true)
   
}
console.log(message) 
//   let companies =  [{ name: 'Credit_limit',  jobs: ['Billing_cycle', 'Equifax_score', 'Cash_limit','Balance']},{ name: 'Cash_limit',  jobs: ['Billing_cycle', 'Equifax_score', 'Credit_limit','Balance']}];
  // const [selectedfield, setselectedField] =  useState('Credit_limit')
  // const [selectedrelation, setselectedRelation] =  useState()
  // const [selectedfield1, setselectedField1] =  useState()
  // let [num, setNum]= useState(0);
  
//  let handleChange = (e)=>{
//    setNum(e.target.value);
//   }
  // const handleSelect6 = event => {
  //   setselectedField(event.target.value)
  // }
  // const handleSelect7 = event => {
  //   setselectedRelation(event.target.value)
  // }
  // const handleSelect8 = event => {
  //   setselectedField1(event.target.value)
  // }
  
  // const downloadData6 = async (event) =>{
  //   setOpenModal6(false);
  //   event.preventDefault();
  //   try{
  //     const USER_DATA6 = {
  //           "Feild1" : selectedfield,
  //           "Relation" : selectedrelation,
  //           "Percentage": num,
  //           "Feild2" : selectedfield1

  //     }
  //     const response = await fetch("http://localhost:8000/new_samples", {
  
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //         // "Content-Type": "multipart/form-data"
  //       },
  //       // body: formData
  //       body: JSON.stringify(USER_DATA6)
  //     });
  
  //     // const blob = await response.blob();
  //     // saveAs(blob)
  //      //success = "Data generation has done"
  //      //console.log(success)
  //     // if (response.status === 200) {
  //     //   // setTimeout(() => {
  //     //   //   saveAs(blob, "my_file.xlsx") 
  //     //   // },3000);
  //     //   return blob;
  //     // }
  //   }catch (error) {
  //     return error.message
  //   }
  // }
  return (
    <div className="modalBackground5">
    <div className="modalContainer6">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenTraining_dataset(false);
          }}
        >
          X
        </button>
      </div>
      <div className="topic"><h3 style={{position:"absolute",left:"130px",top:"5px"}}><b>Conditional Data  Generation</b></h3></div>
      <div className="body6" style={{position:"absolute",top:"120px"}}>
      
      {/* <label style={{position:"absolute",left:"110px"}}><b>Credit_limit:</b></label> */}
      {/* <select name="label_name" id="label_name" style={{position:"absolute",left:"110px"}} onChange={handleSelect6} value={selected6}>
          
                                
                                   
          <option value="Credit_limit">Credit_limit</option>
          <option value="Cash_limit">Cash_limit</option>
         
         
           
        
</select> */}
 <div style={{position: "absolute", left:"268px",bottom:"40px"}}>
  <label style = {{position:"absolute", left:"-130px"}}><b>Select source:</b></label>
  <input className="input" style={{ position: "absolute",width: "140px"}}type="file" onChange={handleChange} />
 </div>  
  <div style={{position: "absolute", left:"268px",bottom:"-10px"}}>
  <label style = {{position:"absolute", left:"-130px"}}><b>look_back:</b></label>
    <input style={{ position: "absolute",width: "140px"}}
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter look_back..."
          onChange={handleChange71}
          value={lookBack}
        />  
 </div>  
<div style={{position: "absolute", left:"250px",bottom:"-60px"}}>
<label style = {{position:"absolute", left:"-170px"}}><b>Future_prediction:</b></label>
<input style={{ position: "absolute" ,width: "140px",left:"17px"}}
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter future-prediction..."
          onChange={handleChange72}
          value={futurePrediction}
        />    
</div>
  

    
    
 
  
  
    {/* <select name="feild_name" id="feild_name" style={{position:"absolute",left:"270px"}}>
          
                                
                                   
                                  <option value="Billing_cycle">Billing_cycle</option>
                                  <option value="Equifax_score">Equifax_score</option>
                                  <option value="Cash_limit">Cash_limit</option>
                                  <option value="Balance">Balance</option>
                                 
                                   
                                
    </select>
        */}
       
        
        
        
      </div>
      
      <div className="footer6">
        <button className="btn btnGreen" style={{width:"90px"}} onClick={(event) => dummy1(event)}
          id="okBtn"
        >
          Generate
        </button>
       
      </div>
    </div>
  </div>
  
);
}

export default Training_dataset;
