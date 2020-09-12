import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: "Name 1", age: 28},
            {name: "Name 2", age: 25},
            {name: "Name 3", age: 22},
        ],
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

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Name 1", age: 28},
                {name: event.target.value, age: 25},
                {name: "Name 3", age: 22},
            ],
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App.</h1>
                <button onClick={() => this.switchNameHandler('Fullname')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangeHandler}/>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={this.switchNameHandler.bind(this, 'New name')}>My Hobbies: Racing</Person>
            </div>
        );
    }

}

export default App;


