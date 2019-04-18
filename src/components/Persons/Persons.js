import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Perons.js shouldComponentUpdate");
        if(this.props.persons !== nextProps.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Perons.js getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Perons.js componentDidUpdate");
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;