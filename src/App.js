import {useState} from 'react';
import './App.css';

const App=() =>{
  const [value,setValue]=useState(0);
 const setHandler=(n)=>{
  setValue(n=>n+1);
 }

  return (
    <div>
      <p id="value">{value}</p>
         <button onMouseOver={setHandler}>Increment</button>
    </div>
  );
}

export default App;
