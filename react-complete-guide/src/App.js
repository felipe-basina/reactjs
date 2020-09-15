import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {id: 'dsasda', name: "Name 1", age: 28},
            {id: 'wdcsasw', name: "Name 2", age: 25},
            {id: 'asashhh1', name: "Name 3", age: 22},
        ],
        showPersons: false,
    }

    switchNameHandler = (newName) => {
        //console.log('Was clicked!');
        this.setState({
            persons: [
                {name: newName, age: 25},
                {name: "Name 2", age: 23},
                {name: "Name 3", age: 19},
            ],
        });
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: [...persons],
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow,
        });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return (
                                <Person
                                    click={() => this.deletePersonHandler(index)}
                                    changed={(event) => this.nameChangeHandler(event, person.id)}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id} />
                            );
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App.</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }

}

export default App;

