import React from 'react';
import Radium from "radium";

const Squere = (props) => {

    let squers = [];
    for (let i = 0; i < props.noOfSquers * props.noOfSquers; ++i) {
        squers.push(<div id='grid-item' style={props.da} key={i} className='grid-item'>
        </div >);
    }

    return (
        <div className="container" id="container" style={props.styleContainer} >
            {squers}
        </div >
    );
};

export default Radium(Squere);