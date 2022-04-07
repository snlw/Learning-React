import React, { useState} from 'react';
import '../App.css';

const ChangeColor = () => {
    // Create initial state color with initial value black.
    const [color, toggleColor] = useState('black');

    return(
        <div className='App'>
        <button onClick={() => { 
            toggleColor(color === 'black' ? 'red' : 'black');
        }}>Change Color</button>
        <h1 style={{color : color}}>Sample Text</h1>
        </div>
    )
};

export default ChangeColor