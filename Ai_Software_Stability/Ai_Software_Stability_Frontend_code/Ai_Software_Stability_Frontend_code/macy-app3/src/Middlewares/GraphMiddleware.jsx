export default async function downloadData(event, file, siteName) {
    try {
      event.preventDefault();
      const fileData = new FormData();
  
      fileData.append("excel_file", file);
      fileData.append("dataset", siteName);
      //fileData.append("future_prediction", futurePrediction);
      console.log(fileData)
      
      const response = await fetch("http://localhost:8000/Read_csv_site_Name/"
        ,
        {
          method: "POST",
  
          headers: {
            // "Content-Type": "application/json"
            // "Content-Type": 'multipart/form-data'
            
          },
          
          body: fileData
          // body: JSON.stringify(DATA_FORMAT)
        }
      );
      const json = await response.json();
      if (response.status === 200) {
        // setMessage(json);
        
        return json;
      
      } 
    } catch (error) {
      return error.message;
    }
  }
  // export default async function downloadData2(event, file) {
  //   try {
  //     event.preventDefault();
  //     const fileData = new FormData();
  //     fileData.append("csv_file", file);
  //     const response = await fetch("http://localhost:8000/Read_csv_site_Name1/"
  //       ,
  //       {
  //         method: "POST",
  
  //         headers: {
  //           // "Content-Type": "application/json"
  //           // "Content-Type": 'multipart/form-data'
            
  //         },
  //         body: fileData
  //         // body: JSON.stringify(DATA_FORMAT)
  //       }
  //     );
  //     const json = await response.json();
  //     if (response.status === 200) {
  //       // setMessage(json);
        
  //       return json;
      
  //     } 
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

 export async function downloadData1(event,files) {
    try {
      event.preventDefault();
      const fileData = new FormData();
      fileData.append("csv_file", files);
      console.log(fileData)
      console.log(JSON.stringify(fileData))
      const response = await fetch("http://localhost:8000/trigramdf",
        {
          method: "POST",
  
          headers: {
            // "Content-Type": "application/json"
            // "Content-Type": 'multipart/form-data'
           
          },
          body: fileData
          // body: JSON.stringify(DATA_FORMAT)
        }
      );
      const json = await response.json();
      if (response.status === 200) {
        // setTabularData(json);
        console.log(json)
        return json;
       
      } 
    } catch (error) {
      return error.message;
    }
  }
  export async function forecastData(event, startDate, endDate, value) {
    console.log(startDate)
    console.log(endDate)
    console.log(value)
    try {
      event.preventDefault();
      const fileData = new FormData();
      fileData.append("start_date", startDate);
      fileData.append("end_date", endDate);
      fileData.append("dataset",value);
      
      
      console.log(fileData)
      console.log(JSON.stringify(fileData))
      const response = await fetch("http://localhost:8000/predict_site_Name",
        {
          method: "POST",
  
          headers: {
            // "Content-Type": "application/json"
            // "Content-Type": 'multipart/form-data'
           
          },
          body: fileData
          // body: JSON.stringify(DATA_FORMAT)
        }
      );
      const json = await response.json();
      if (response.status === 200) {
        // setTabularData(json);
        console.log(json)
        return json;
       
      } 
    } catch (error) {
      return error.message;
    }
  }


