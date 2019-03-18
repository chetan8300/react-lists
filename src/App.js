import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                click={ () => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangeHandler(event, person.id)}
                            />
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Persons</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}
                >
                    {this.state.showPersons ? 'ON' : 'OFF'}
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
