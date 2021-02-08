import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Bob",
        age: 52
      },
      {
        name: "Suzan",
        age: 18
      },
      {
        name: "Max",
        age: 23
      }
    ],
    otherState: "Others",
    showPersons: false
  }

  switchHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 42
        },
        {
          name: "Suzan",
          age: 18
        },
        {
          name: "Max",
          age: 23
        }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 52
        },
        {
          name: "Suzan",
          age: 18
        },
        {
          name: "Max",
          age: 23
        }
      ]
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
    return (
      <div className="App">
        <h1>React App</h1>
        <button 
          style={buttonStyle}
          onClick={this.togglePerson}>Switch Name</button>
        { 
          this.state.showPersons ?
            <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchHandler.bind(this, 'Max')}
              nameChangedHandler={this.nameChangedHandler}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              nameChangedHandler={this.nameChangedHandler}/>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              nameChangedHandler={this.nameChangedHandler}/>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
