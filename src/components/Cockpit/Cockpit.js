import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    let assigendClasses = [];
    let btnClass = props.showPersons ? classes.Red : '';

    if(props.persons.length <= 2){
      assigendClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assigendClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assigendClasses.join(' ')}>App description</p>
            <button className={btnClass} alt={props.showPersons ? "true" : "false"} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
};

export default Cockpit;