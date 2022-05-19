import logo from './logo.svg';
import './App.css';
// import react from 'react'
import { useState } from "react";

function App() {
 
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );


  
}

export default App;
