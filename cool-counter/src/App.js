import CoolCounter from "./components/CoolCounter";
import React from 'react';

const App = () =>{

  // Set background to be the grey color
  document.body.style.background = '#2c2c2c';

  return (
    <div className="App">
      <CoolCounter />
    </div>
  );
};

export default App;
