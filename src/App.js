import React, { useState } from "react";
import "./app.css";

function App() {

  const [minVal, setMinVal] = useState(10);
  const [maxVal, setMaxVal] = useState(20);
  const [randomNum, setRandomNum] = useState(5);

  const rastgeleSayi=()=>{
    setRandomNum(Math.floor(Math.random()*(maxVal - minVal +1) + minVal))
  }


  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number : <span>{randomNum}</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min : </p>
            <input type="number" value={minVal} 
            onChange={e => setMinVal(+e.target.value)}
            ></input>
          </div>
          <div>
            <p>Max : </p>
            <input type="number" value={maxVal}
            onChange={e => setMaxVal(+e.target.value)}
            ></input>
          </div>
        </div>
        <button onClick={rastgeleSayi} >Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
