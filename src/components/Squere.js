import React, { useState } from 'react';



const Squere = (props) => {
    let squers = [];


    const [isHovering, setIsHovering] = useState(-1);
    const [randomColor, setRandomColor] = useState("");

    const generateRandomColor = () => {
        setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
    }

    const style = () => {
        if (props.black) {
            return {
                width: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers, height: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers, backgroundColor: "black"
            }
        } else if (props.randomColor) {
            return {
                width: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers, height: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers, backgroundColor: randomColor
            }
        }
    }

    for (let i = 0; i < props.noOfSquers * props.noOfSquers; ++i) {
        squers.push(<div id='grid-item' onMouseEnter={() => { setIsHovering(i); generateRandomColor() }} onMouseLeave={() => setIsHovering(-1)} style={isHovering === i ? style() : { width: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers, height: (575 - props.noOfSquers - props.noOfSquers) / props.noOfSquers, backgroundColor: "white" }} key={i} className='grid-item' >
        </div >);
    }
    return (

        <div className="container" id="container" style={props.styleContainer} >
            {squers}
        </div >
    );
};

export default Squere;