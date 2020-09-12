import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <Person name="Name 1" age="20" />
        <Person name="Name 2" age="23" />
        <Person name="Name 3" age="25">My Hobbies: Racing</Person>
    </div>
  );
}

export default App;
