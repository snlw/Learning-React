// We need to import the React library so that we can start building out our component.

import React from 'react';

import Greeting from "./components/greeting";

const App = () => (
  <div>
    <h1> The React Workshop App</h1>
    <Greeting name="Sean" />
    <Greeting name="Keith" />
  </div>
)

export default App;
