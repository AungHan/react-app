import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


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
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    // only for class based compnent
    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        // this.context given by React
        console.log(this.context.authenticated);
    }
    render(){
        console.log('[Person.js] render');
        return (
            <Fragment>
                   {
                       this.context.authenticated 
                       ? <p>Authenticated</p>
                       : <p>Please log in</p>
                   }
               <div>
                    <p 
                        onClick={this.props.click}>
                        Name: {this.props.name} - Age: {this.props.age}
                    </p>
                    <input 
                        key="i3"
                        // ref={(inputEle) => {this.inputElement = inputEle}}
                        ref={this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}/>
                </div>
            </Fragment>
        );
    }
}

// good for warning/exception for caller to know 
// prop types
Person.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string,
    click: PropTypes.func,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);