import React, { Component } from "react";
import classes from './Person.module.css';

class Person extends Component {
    render() {
        return (
            <div className={classes.Person}>
                <p>I am {this.props.name}, and {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>Delete</button>
            </div>
        );
    }
};

export default Person;