import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import styled from 'styled-components';
import withClass from '../hoc/withClass';

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
  constructor(props){
    super(props);
    console.log('[App.js] ctor');
  }

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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate()');
  }

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => p.id === id);
    let person = {...this.state.persons[personIndex]};
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      let newState = {
          persons: person,
          changeCounter: prevState.changeCounter + 1
        };
      return newState;
    });
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
    console.log('[App.js] render');
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

    let cockpit = this.state.showCockpit === true ? (
      <Cockpit 
            title={this.props.appTitle}
            personLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePerson}
            />
    ) : null;

    return (
        // <WithClass classes={classes.App}>
        <div>
          <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>Toggle Cockpit</button>
          {cockpit}
          {persons}
        </div>
        // </WithClass>
    );
  }
}

export default withClass(App, classes.App);
