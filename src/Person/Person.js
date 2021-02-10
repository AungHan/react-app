import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const personStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={personStyle}>
            <p onClick={props.click}>Name: {props.name} - Age: {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);