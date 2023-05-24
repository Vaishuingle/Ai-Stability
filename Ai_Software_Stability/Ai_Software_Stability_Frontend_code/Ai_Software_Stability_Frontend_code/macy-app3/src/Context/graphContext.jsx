import React from "react";
import { createContext, useState } from "react";

export const GraphContext = createContext();

export function GraphDataContextProvider(props) {

 const [predictionData, setPredictionData] = useState(null);
 const [showPrediction, setShowPrediction] = useState(false);
return (
    <GraphContext.Provider value={{predictionData, setPredictionData,showPrediction,setShowPrediction}}>
    {props.children}
    </GraphContext.Provider>
        
);

}
