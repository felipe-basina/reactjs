import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: "Name 1", age: 28 },
            { name: "Name 2", age: 25 },
            { name: "Name 3", age: 22 },
        ],
    }

    switchNameHandler = () => {
        //console.log('Was clicked!');
        this.state.persons[0].name = "Full Name";
    }

    render () {
        return (
            <div className="App">
                <h1>Hi, I'm a React App.</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Racing</Person>
            </div>
        );
    }

}

export default App;
