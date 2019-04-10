import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    state = {
        persons: [
            { id: 'Person1', name: 'chetan1', age: 10 },
            { id: 'Person2', name: 'chetan2', age: 20 },
            { id: 'Person3', name: 'chetan3', age: 30 },
            { id: 'Person4', name: 'chetan4', age: 40 }
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { id: 'Person1', name: newName, age: 56546546540 },
                { id: 'Person2', name: 'asdasdaadada2', age: 56546546540 },
                { id: 'Person3', name: 'asdasdaadada3', age: 56546546540 },
                { id: 'Person4', name: 'asdasdaadada4', age: 56546546540 }
            ]
        });
    }

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;
        this.setState({ persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];

        persons.splice(personIndex, 1);

        this.setState({ persons });
    }

    render() {

        const style = {
            
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}
                    />
                </div>
            );

            style.backgroundColor = 'red';
        }

        return (
            <div className={styles.App}>
                <Cockpit
                    style={style}
                    persons={this.state.persons}
                    togglePersonsHandler={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                />
                {persons}
            </div>
        );
    }
}

export default App;
