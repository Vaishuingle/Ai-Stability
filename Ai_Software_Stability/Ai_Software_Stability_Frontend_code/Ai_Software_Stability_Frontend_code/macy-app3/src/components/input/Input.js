import React, { useState, useEffect, useContext, useRef } from 'react';
import DatePicker from 'react-date-picker';
import './input.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, InputLabel } from '@mui/material';
import {Grid} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { Forecast, forecastData } from '../../Middlewares/GraphMiddleware';
import moment from "moment";
import { GraphContext } from '../../Context/graphContext';
import Prediction from '../../components/prediction/Prediction';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  input: {
    fontSize: '0.8rem', // or any other value
  },
});

function Input() {
  const classes = useStyles();
  const {predictionData, setPredictionData,showPrediction,setShowPrediction} = useContext(GraphContext)
  
 
  const [value, setValue] = React.useState(dayjs('2022-11-01'));
  const [endValue, setEndValue] = useState(dayjs('2022-11-28'));
  // const [predictionData, setPredictionData] = React.useState(null);
  const top5SiteName = [
    "MLO-050  MLO - Portland", "MLO-869  MLO - Tulsa", "MLO-506  MLO - Goodyear","MLO-043  MLO - West Virginia","MLO-500  MLO - Cheshire"
  ];
  const top2ApplicationName = [
    { label: 'WMS MA'},
    { label: 'Ship On Time (SOT)'},
,
  ];
   
    const [inputValue, setInputValue] = useState();
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const handleChange = (newValue) => {
      let formattedDate1 = moment(newValue).format('YYYY/MM/DD');
      setValue(newValue);
      
    };
  
    const handleChangeEnd = (newValue) => {
      let formattedDate = moment(newValue).format('YYYY/MM/DD');
      setEndValue(newValue);
    };
    const onInputChange = (newValue) => {
     
    };
    const onChange = (event,newValue) => {
     setValue1(newValue);
    
    };
    const onChange2 = (event,newValue) => {
      //setValue1(newValue);
      setValue2(newValue)
     };
     const onForecast = async(event) => {
      
      let dropDownValue;
      console.log(value1)
      console.log(value2)
      {
        value1 === "" ? dropDownValue=value2: dropDownValue=value1

        console.log(dropDownValue);
        console.log(typeof(dropDownValue))
        JSON.stringify(dropDownValue)
        console.log(dropDownValue)
        console.log(typeof(dropDownValue))
      }
      const response = await forecastData(event, value, endValue,dropDownValue);
      console.log(response)
      setPredictionData(response);
      setShowPrediction(true);
      console.log(response);
      console.log(value);
      console.log(typeof(value))
      console.log(endValue)
      console.log(Number(endValue))
      console.log(typeof(endValue))
      return response;
  
    }
  
    useEffect(() => {
    //localStorage.setItem('startDate',startDate);
    AOS.init();
  });

  
  

   const onGenerate=()=>{

   }
   
  return (
    
    <Card sx={{ maxWidth: 1400}} style={{backgroundColor:'whitesmoke'}}>
    <CardActionArea>
      <CardContent>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={10} direction="row">
          <DesktopDatePicker
          label="Start Date"
          inputFormat="YYYY/MM/DD"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          sx={{color:'white',width:'10px'}}
          />
          <DesktopDatePicker
          label="End Date"
          inputFormat="YYYY/MM/DD"
          value={endValue}
          onChange={handleChangeEnd}
          renderInput={(params) => <TextField {...params}/>}
          autoOk
          sx={{color:'white',width:'10px'}}
          />
          
          <Autocomplete
          id="disabled"
          value={value1} 
          onChange={onChange} 
          inputValue={inputValue} 
          onInputChange={onInputChange} 
          sx={{width:170}}
          disabled={value2}
         
          options={top5SiteName} renderInput={(params) => <TextField {...params}   id={"outlined-helperText"} label="Site Name" InputLabelProps={{
          shrink: true,}}/>}
         />
         <Autocomplete value={value2} 
         onChange={onChange2} 
         inputValue={inputValue} 
         onInputChange={onInputChange} 
         sx={{width:170}}
         disabled={value1}
         options={top2ApplicationName} renderInput={(params) => <TextField {...params} label="Application" InputLabelProps={{
shrink: true,}}/>}
         />
          
          
          <Button style={{left:'-10px' }}
            variant="contained" onClick={(event) => onForecast(event)}>Forecast</Button>
           
        </Stack>
      </LocalizationProvider>
       
      </CardContent>
      </CardActionArea>
     
    </Card>
   
    
    
  
  );
}

export default Input;

    // <>
    // <div>
    //   <div className="text-l mb-2">Enter Start Date</div>
    //   <DatePicker onChange={onDateChange} id="startDate" name="startDate" value={startDate} clearIcon={null} />
    // </div>
    // <div>
    //   <div className="text-l mb-2">Enter End Date</div>
    //   <DatePicker onChange={(date)=>setEndDate(date)} id="endDate" name="endDate" value={endDate} clearIcon={null} />
    // </div>
    // <div>
      
    // </div>
    
    // </>