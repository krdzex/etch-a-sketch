import React from "react"
import "./Popup.css"
var inputNumber = 0;
const Popup = (props) => {

    const onChangeInput = () => {
        inputNumber = parseInt(document.getElementById("input").value);
    }
    const changeTrigger = () => {
        props.setTrigger(false);
    }

    const input = () => {
        props.addingSquers(inputNumber);
    }
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1>Hii and welcome to etch-a-sketch application</h1>
                <p>All you need to do is enter number of squers that u want to draw</p>
                <input id="input" onChange={onChangeInput} type="number" placeholder="Please enter number..."></input>
                <div className="buttonsPopup">
                    <button className="ok-btn" onClick={() => { changeTrigger(); input() }}>Ok</button>
                    <button className="close-btn" onClick={changeTrigger}>Close</button>
                </div>
            </div>
        </div >
    ) : "";
}

export default Popup;