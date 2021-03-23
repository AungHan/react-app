import React, { PureComponent } from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {

  static contextType = AuthContext;
  
  static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked)
  //     return true;
  //   return false;
  // }

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
                changed={(event) => this.props.changed(event, person.id)}
              />
      })
    );
  }
}

Persons.propTypes = {
  persons: PropTypes.array,
  changed: PropTypes.func,
  clicked: PropTypes.func
};

export default Persons;