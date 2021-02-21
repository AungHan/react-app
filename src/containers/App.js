import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: ${props => props.alt === "true" ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: ${props => props.alt === "true" ? 'salmon' : 'lightgreen'};
        color: black;
      }
    `;

class App extends Component {
  state = {
    persons: [
      {
        id: 'xa',
        name: "Bob",
        age: 52
      },
      {
        id: 'xb',
        name: "Suzan",
        age: 18
      },
      {
        id: 'xc',
        name: "Max",
        age: 23
      }
    ],
    otherState: "Others",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => p.id === id);
    let person = {...this.state.persons[personIndex]};
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    let persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  togglePerson = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let persons = null;
    

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
        </div> 
      )
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePerson}
            />
          {persons}
        </div>
    );
  }
}

export default App;
