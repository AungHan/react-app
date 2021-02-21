import React, { Component } from 'react';
import classes from './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px) {
        width: 450px;
    `;

class Person extends Component {
    render(){
        console.log('[Person.js] render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>Name: {this.props.name} - Age: {this.props.age}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>    
        );
    }
}

export default Person;