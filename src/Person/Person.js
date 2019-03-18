import React from "react";
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I am {props.name}, and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete</button>
        </div>
    );
};

export default person;