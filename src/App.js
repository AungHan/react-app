import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    // inline style
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
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
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button 
          style={buttonStyle}
          onClick={this.togglePerson}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
