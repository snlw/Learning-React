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
            <button onClick={(e) => updateValue(e, true)}>+</button>
            <Tracker value={value} />
            <button onClick={(e) => updateValue(e, false)}>-</button>
        </div>
    )
};

export default CoolCounter;