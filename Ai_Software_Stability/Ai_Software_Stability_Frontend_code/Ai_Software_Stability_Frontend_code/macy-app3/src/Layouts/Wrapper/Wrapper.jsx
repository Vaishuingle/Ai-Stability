import React, {useState, useContext} from "react";
import BasicButtons from "../../components/ButtonsCont/ButtonsCont";
import Input from "../../components/input/Input";
import Prediction from "../../components/prediction/Prediction";
import { GraphContext } from "../../Context/graphContext";
import { Stack } from "@mui/material";

export default function Wrapper(){
    const {showPrediction, setShowPrediction} = useContext(GraphContext)
    const [training_datasetOpen, setTraining_datasetOpen] = useState(false);
    const [modalOpen8, setModalOpen8] = useState(false);
    return (
        
    <div className="container-fluid">
      
        <div className="row">
            <Stack spacing={3}>
            <BasicButtons 
            setTraining_datasetOpen={setTraining_datasetOpen} 
            setModalOpen8={setModalOpen8}
            training_datasetOpen={training_datasetOpen}
            modalOpen8={modalOpen8}/>
           <Input />
           {showPrediction && <Prediction />}
           {/* <Prediction /> */}
        
           </Stack>

        </div>
    </div>
        
    )
}