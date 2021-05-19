import React, { useState } from 'react';



const Squere = (props) => {

    const [randomColor, setRandomColor] = useState("");
    const generateRandomColor = () => {
        setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    const color = () => {
        if (props.black) {
            return "black";
        } else if (props.randomColor) {
            return randomColor;
        } else {
            return "white"
        }
    }

    const square = document.querySelector('div');
    square.addEventListener("mouseover", function (event) {
        if (event.target.id === "gridItem") {
            event.target.style.backgroundColor = color();
        }
    });



    return (
        <div className="container" id="container" style={props.styleContainer} >
            {props.squers && props.squers.map((squere, id) => (
                <div id='gridItem' onMouseEnter={() => generateRandomColor()} style={{ width: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers, height: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers }} key={id} className='grid-item' >
                </div>
            ))
            }
        </div >
    );
};

export default Squere;