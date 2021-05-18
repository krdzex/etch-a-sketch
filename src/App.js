import React, { useState } from "react";
import Popup from "./components/Popup";
import "./App.css"
import Squere from "./components/Squere"




const App = () => {
  const [dajBroj, setDajBroj] = useState(0);

  const [styleContainer, setStyleContainer] = useState({});
  const [squers, setSquers] = useState([]);

  const adding = (numberSquers) => {
    setDajBroj(numberSquers);
    setStyleContainer({ display: "grid", gridTemplateColumns: 'repeat(' + numberSquers + ', 0fr)', gridTemplateRows: 'repeat(' + numberSquers + ', 0fr)' });
    for (var i = 0; i < numberSquers * numberSquers; i++) {
      squers.push(i);
    }
  }
  const [black, setBlack] = useState(false);
  const [randomColor, setRandomColor] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const reset = () => {
    setBlack(false);
    setRandomColor(false);
    setSquers([]);
  }

  return (
    <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} addingSquers={adding} >
      </Popup>
      <div className="parent">
        <div className="child">
          <div className="buttonsApp">
            <button onClick={() => { setButtonPopup(true); reset() }}>Reset game</button>
            <button onClick={() => { setBlack(true); setRandomColor(false) }}>Black</button>
            <button onClick={() => { setBlack(false); setRandomColor(true) }}>Random Color</button>
            <button id="clear" onClick={() => { setBlack(false); setRandomColor(false) }}>White</button>
          </div>
          <Squere noOfSquers={dajBroj} styleContainer={styleContainer} black={black} randomColor={randomColor} squers={squers} />
        </div>
      </div >
    </div >
  )
}

export default App;
