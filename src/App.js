import React, { useState } from "react";
import Popup from "./components/Popup";
import "./App.css"
import Radium from "radium";



const App = () => {
  const [dajBroj, setDajBroj] = useState(0);

  const [styleContainer, setStyleContainer] = useState({});

  const [da, setDa] = useState({
    backgroundColor: '#07d',
    border: "none",
    borderRadius: 4,
    color: '#fff',
    padding: "5px 20px",
    ":hover": {
      backgroundColor: "#08f"
    }
  })


  const adding = (numberSquers) => {
    setDajBroj(numberSquers);
    for (var i = 0; i < numberSquers * numberSquers; i++) {
      document.getElementById("container").innerHTML += "<div id='grid-item' class='grid-item'  onMouseOver= document.getElementById('grid-item').style.background = 'red'></div > ";
    }
    setStyleContainer({ display: "grid", gridTemplateColumns: 'repeat(' + numberSquers + ', 0fr)' });
  }
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} addingSquers={adding} >
      </Popup>
      <div className="parent">
        <div className="child">
          <div className="buttonsApp">
            <button onClick={() => setButtonPopup(true)}>Reset game</button>
            <button style={da}>Black</button>
          </div>
          <div className="container" id="container" style={styleContainer} >
          </div>
        </div>
      </div >
    </div >
  )
}

export default Radium(App);
