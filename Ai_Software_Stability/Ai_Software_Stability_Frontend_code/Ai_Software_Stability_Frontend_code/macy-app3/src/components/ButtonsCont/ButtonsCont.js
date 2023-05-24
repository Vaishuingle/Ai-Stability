import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import downloadData from '../../Middlewares/GraphMiddleware';
import { downloadData1 } from '../../Middlewares/GraphMiddleware';
import Autocomplete from '@mui/material/Autocomplete';

function BasicButtons(props) {
  const [file, setFile] = React.useState(null);
  const [files, setFiles] = React.useState(null);
  // //const [lookBack, setLookBack] = React.useState(0);
  // const [futurePrediction, setFuturePrediction] = React.useState(0);
  
  const[message, setMessage] = React.useState(null);
  const[message1, setMessage1] = React.useState(null)
  const [value1, setValue1] = useState("");
  const [inputValue, setInputValue] = useState();
  const [status, setStatus] = useState(false);
  const top5SiteName = [
    "MLO-050 : MLO - Portland", "MLO-869 : MLO - Tulsa", "MLO-506 : MLO - Goodyear","MLO-043 : MLO - West Virginia","MLO-500 : MLO - Cheshire","None"
  ];
  const handleClose = () => {
    props.setTraining_datasetOpen(false);
  };
  const onChange = (event,newValue) => {
    setValue1(newValue);
   
   };

   const onInputChange = (newValue) => {
     
   };
  const handleClosePrediction = () => {
    props.setModalOpen8(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0])
  }

  const handleChanges = (event) => {
    event.preventDefault();
    setFiles(event.target.files[0])
  }

  // const handleChangeInput = (event) => {
  //   event.preventDefault();
  //   setLookBack(event.target.value);

  // }

  // const handleChangeInputs = (event) => {
  //   event.preventDefault();
  //   setFuturePrediction(event.target.value);

  // }

  const handleGeneratePrediction = async(event) => {
    console.log(files)
    const response = await downloadData1(event,files);
    props.setModalOpen8(false);
    return response;
 }

 const handleGenerate = async(event) => {
  console.log(file)
  console.log(value1)
  //console.log(lookBack)
  //console.log(futurePrediction)
  setMessage("Model Training is the progress")
  const response1 = await downloadData(event,file,value1);
  console.log(response1)
  setStatus(true)
  setMessage(response1.result1);
  
  const response2 = await downloadData(event,file,value1);
  console.log(response2)
  //setStatus(true)
  setMessage(response1.result2);
  setTimeout(() => {
      setStatus(false)
      setMessage("");
      props.setTraining_datasetOpen(false);
  },5000);
  //setMessage("");
  //props.setTraining_datasetOpen(false);

  
 
 
}


  return (
    <div style={{marginTop:'7%'}}>
      <Stack spacing={12} direction="row">
        <Button variant="contained" onClick={()=>{props.setTraining_datasetOpen(true)}}>Train (Forecast)</Button>
        {/* <Button variant="contained" onClick={()=>{props.setModalOpen8(true)}}>Analysis</Button> */}
      </Stack>
      <Dialog fullWidth open={props.training_datasetOpen} onClose={handleClose}>
        <DialogTitle>Train Forecasting</DialogTitle>
        <DialogContent>
        <label style={{color:'black', fontSize:'20px'}}>Select a File:</label>
        <Button variant="contained" component="label">
         Upload
        <input hidden multiple type="file" onChange={handleChange}/>
        </Button>
        <Autocomplete
          id="disabled"
          value={value1} 
          onChange={onChange} 
          inputValue={inputValue} 
          onInputChange={onInputChange} 
          sx={{width:170}}
          options={top5SiteName} renderInput={(params) => <TextField {...params}   id={"outlined-helperText"} label="Site Name" InputLabelProps={{
          shrink: true,}}/>}
         />
        {/* <TextField fullWidth label="Look Back" variant="filled" focused /> */}
        {/* <TextField
            autoFocus
            margin="dense"
            id="standard-number"
            label="Look Back"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChangeInput}
          />
         
          <TextField
            autoFocus
            margin="dense"
            id="standard-number"
            label="Future Prediction"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChangeInputs}
            
          /> */}
          <p>{message}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleGenerate}>Train</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={props.modalOpen8} onClose={handleClosePrediction}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
        <label style={{color:'black', fontSize:'20px'}}>Please select a file:</label>
        <Button variant="contained" component="label">
        Select File
        <input hidden accept="image/*" multiple type="file" onChange={handleChanges}/>
        </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePrediction}>Cancel</Button>
          <Button onClick={(event)=>{handleGeneratePrediction(event)}}>Generate</Button>
        </DialogActions>
      </Dialog>


    </div>
   
  );
}
export default BasicButtons;