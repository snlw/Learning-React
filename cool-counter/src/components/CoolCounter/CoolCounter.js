import "./CoolCounter.css";
import { useState } from "react";
import Tracker from "../Tracker/Tracker";

const initialValue = 0;

const CoolCounter = () => {
    const [value, setValue] = useState(initialValue);

    const updateValue = (event, isIncrement) => {
        const currentValue = value;
        setValue(isIncrement ? currentValue + 1 : currentValue - 1);
    };

    return (
        <div className="CoolCounter">
            <button 
                onClick={(e) => updateValue(e, false)} 
                style={{
                    fontSize : "50px", 
                    paddingRight : "10%",
                    background : "transparent",
                    border : "transparent",
                    color : "#6c6c6c",
                    }}>-</button>
            <Tracker value={value} />
            <button 
                onClick={(e) => updateValue(e, true)} 
                style={{
                    fontSize : "50px", 
                    paddingLeft : "10%",
                    background : "transparent",
                    border : "transparent",
                    color : "#6c6c6c"
                    }}>+</button>
        </div>
    )
};

export default CoolCounter;