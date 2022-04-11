import './Tracker.css';
import React, {useEffect, useState} from 'react';

const initialValue = 0;

const Tracker = () => {

    const [value, setValue] = useState(initialValue);

    const handleDrag = (event) => {
        const currentValue = value;
        console.log(event.clientY);
        setValue(currentValue + 1);
    };

    return (
        <div 
            className='Tracker'
            onDragStart={handleDrag}>
            <p>{value}</p>
        </div>
    )
};

export default Tracker;