import React, { useState } from "react";
import Popup from "./components/Popup";
import "./App.css"
import Squere from "./components/Squere"
import Radium from "radium";



const App = () => {
  const [dajBroj, setDajBroj] = useState(0);

  const [styleContainer, setStyleContainer] = useState({});

  const [da, setDa] = useState({
    width: 30,
    height: 30,
    ":hover": {
      backgroundColor: null
    }
  })


  const adding = (numberSquers) => {
    setDajBroj(numberSquers);
    setStyleContainer({ display: "grid", gridTemplateColumns: 'repeat(' + numberSquers + ', 0fr)', gridTemplateRows: 'repeat(' + numberSquers + ', 0fr)' });
    setDa({
      width: (575 - numberSquers - numberSquers) / numberSquers,
      height: (575 - numberSquers - numberSquers) / numberSquers
    })
  }
  const black = () => {
    setDa({ ...da, ":hover": { backgroundColor: "black" } })

  }

  console.log(da)
  console.log(da.width, da.height)
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} addingSquers={adding} >
      </Popup>
      <div className="parent">
        <div className="child">
          <div className="buttonsApp">
            <button onClick={() => setButtonPopup(true)}>Reset game</button>
            <button onClick={black}>Black</button>
          </div>
          <Squere noOfSquers={dajBroj} styleContainer={styleContainer} da={da} />
        </div>
      </div >
    </div >
  )
}

export default Radium(App);
