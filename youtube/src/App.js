import React, { useState } from 'react';
import DummyChildComponent from './components/Dummy';
import ChangeColor from './components/ChangeColor';
import DisplayDetails from './components/DisplayDetails';

// Best Practices #1,2
// const App = () => {
//   return(
//     <>
//       <ChangeColor />
//       <DummyChildComponent />
//     </>
//   )
// };

// Best Practices #3
// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState(0);
//   return(
//     <div>
//       <input name ='name' onChange={(event)=> {
//         setName(event.target.value);
//         console.log(name,email,age);
//       }}></input>
//       <input name ='email' onChange={(event)=> {
//         setEmail(event.target.value);
//         console.log(name,email,age);
//       }}></input>
//       <input name ='age' onChange={(event)=> {
//         setAge(event.target.value);
//         console.log(name,email,age);
//       }}></input>
//     </div>
//   )
// };

// Best Practices #4
const App = () => {
  return(
    <>
      <DisplayDetails name='Sean' age={27} isMarried={20} />
    </>
  )
};

export default App;
