import React, { useTransition, useState, Spinner } from 'react';

function App() {
    // isPending indicates when a transition is active to show a pending state:
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    
    function handleClick() {
      startTransition(() => {
        setCount(c => c + 1);
      })
    }
  
    return (
      <div>
        {isPending && <Spinner />}
        <button onClick={handleClick}>{count}</button>
      </div>
    );
  }

export default App;