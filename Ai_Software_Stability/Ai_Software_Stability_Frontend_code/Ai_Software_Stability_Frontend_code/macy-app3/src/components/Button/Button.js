import React from "react";
import './Button.css';

function Button(props) {
    return (
        
        <button className="ButtonStyle" onClick={props.onClick}>
            {props.children}
        </button>

    );
}

export default Button;