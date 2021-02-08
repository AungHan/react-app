import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Name: {props.name} - Age: {props.age}</p>
            <input type="text" onChange={props.nameChangedHandler} value={props.name}/>
        </div>
    )
}

export default person;