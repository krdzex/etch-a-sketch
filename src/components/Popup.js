import React, { useState } from "react"
import "./Popup.css"
var inputNumber = 0;
const Popup = (props) => {

    const [error, setError] = useState("");
    const onChangeInput = () => {
        inputNumber = parseInt(document.getElementById("input").value);
    }
    const changeTrigger = () => {
        if (inputNumber >= 16 && inputNumber <= 100) {
            props.setTrigger(false);
            setError("")
        } else {
            setError("You need to enter number between 16 and 100!")
        }
    }

    const changeTriggerCancel = () => {
        props.setTrigger(false);
        setError("")
    }

    const input = () => {
        if (inputNumber >= 16 && inputNumber <= 100) {
            props.addingSquers(inputNumber);
        }
    }
    const inputCancel = () => {
        props.addingCancel(20);
    }


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1>Hii and welcome to etch-a-sketch application</h1>
                <p>All you need to do is enter number of squers that u want to draw</p>
                <span style={{ color: "red" }}>{error}</span>
                <input id="input" onChange={onChangeInput} type="number" placeholder="Please enter number..."></input>
                <div className="buttonsPopup">
                    <button className="ok-btn" onClick={() => { changeTrigger(); input() }}>Ok</button>
                    <button className="close-btn" onClick={() => { changeTriggerCancel(); inputCancel() }}>Close</button>
                </div>
            </div>
        </div >
    ) : "";
}

export default Popup;