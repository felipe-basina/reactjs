import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
  });

  const handleChange = e => {
    setState({
      ...state, // Reatribui todos os valores anteriores no novo estado
      [e.target.name]: e.target.value, // Redefine o valor específico conforme houver alteração no formulário
    });
  }

  return (
    <div>
      <h1>React Form Handling</h1>
      <form>
        <label>First Name: {" "}
          <input 
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange} />
        </label>
        {" "}
        <label>Last Name: {" "}
          <input 
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange} />
        </label>
      </form>
      <h5>
        Name: {state.fname} {state.lname}
      </h5>
    </div>
  );
}

export default App;
