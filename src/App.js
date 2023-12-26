import "./App.css";
import {useState} from 'react';

function App() {

  const [state, setState] = useState('');

  return (
    <div className="App">
    <h1>Best Places To Celebrate New Year</h1>
    <img src='./images/newyear.jpg'></img>
         <h2>{state}</h2>
    <button onClick={()=>{
      setState('Advance Happy New year');
    }}>Click Me</button>
    </div>
  );
}

export default App;
