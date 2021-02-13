import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
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
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })
          }
        </div> 
      )

      btnClass = classes.Red;
    }

    let assigendClasses = [];
    if(this.state.persons.length <= 2){
      assigendClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assigendClasses.push(classes.bold);
    }
    // <button  onClick={this.togglePerson}>Toggle Persons</button>

    return (
        <div className={classes.App}>
          <h1>React App</h1>
          <p className={assigendClasses.join(' ')}>App description</p>
          
          <button className={btnClass} alt={this.state.showPersons ? "true" : "false"} onClick={this.togglePerson}>
          Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
