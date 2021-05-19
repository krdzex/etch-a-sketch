import React, { useState } from "react";
import Popup from "./components/Popup";
import "./App.css"
import Squere from "./components/Squere"




const App = () => {
  const [dajBroj, setDajBroj] = useState(20);

  const [styleContainer, setStyleContainer] = useState({ display: "grid", gridTemplateColumns: 'repeat(' + dajBroj + ', 0fr)', gridTemplateRows: 'repeat(' + dajBroj + ', 0fr)' });

  const [squers, setSquers] = useState([1]);

  if (squers.length === 1) {
    squers.pop();
    for (var i = 0; i < dajBroj * dajBroj; i++) {
      squers.push(i);
    }
  }

  const cancel = (numberSquers) => {
    setDajBroj(numberSquers)
    setStyleContainer({ display: "grid", gridTemplateColumns: 'repeat(' + numberSquers + ', 0fr)', gridTemplateRows: 'repeat(' + numberSquers + ', 0fr)' });
    for (var i = 0; i < numberSquers * numberSquers; i++) {
      squers.push(i);
    }
  }

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
    setSquers([]);
    setBlack(false);
    setRandomColor(false);
  }

  var button = document.querySelector("#clear");
  if (button !== null) {
    button.addEventListener("click", function () {
      var squeres = document.querySelectorAll("#gridItem");
      for (var i = 0; i < squeres.length; i++) {
        squeres[i].style.backgroundColor = "white"
      }
    });
  }


  return (
    <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} addingSquers={adding} addingCancel={cancel}>
      </Popup>
      <div className="parent">
        <div className="child">
          <div className="buttonsApp">
            <h2 style={{ fontStyle: "italic", color: "white" }}>Etch-a-Sketch</h2>
            <button className="button" onClick={() => { setButtonPopup(true); reset() }}>Reset Board</button>
            <button className="button" onClick={() => { setBlack(true); setRandomColor(false) }}>Black</button>
            <button className="button" onClick={() => { setBlack(false); setRandomColor(true) }}>Random Color</button>
            <button className="button" id="clear" onClick={() => { setBlack(false); setRandomColor(false); }}>Clear Board</button>
          </div>
          <Squere noOfSquers={dajBroj} styleContainer={styleContainer} black={black} randomColor={randomColor} squers={squers} />
        </div>
      </div >
    </div >
  )
}

export default App;
