import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  // run every render cycle
  // 2nd argument -> array, allows subscribe for intended properties
  // to use effect, to run one time only, pass empty array []
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('saved data');
    }, 1000);

    // return func causes clean up useEffect
    // before main useEffect, after first render cycle
    return () => {
      console.log('[Cockpit.js] cleanup work');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work');
    };
  });

  let assigendClasses = [];
  let btnClass = props.showPersons ? classes.Red : '';

  if(props.personLength <= 2){
    assigendClasses.push(classes.red);
  }
  if(props.personLength <= 1){
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

export default React.memo(Cockpit);