//assignment 2
import React from 'react';
import './char.css';

const char = (props) => {
    return (
        <div className ="display" onClick={ props.onClick } >
            {props.character}
        </div>
    );
};

export default char;