import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  static getDerviedStateFromProps(props, state){
    console.log('[Persons.js] getDerviedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return prevState;
  }

  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render(){
    console.log('[Persons.js] render');
    return (
      this.props.persons.map((person, index) => {
        return <Person 
              key={person.id}
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.props.changed(event, person.id)}/>
      })
    );
  }
}

export default Persons;