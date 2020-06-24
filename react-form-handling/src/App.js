import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    carBrand: "",
    isChecked: false,
    gender: "",
    price: 0,
  });

  const handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState({
      ...state, // Reatribui todos os valores anteriores no novo estado
      [e.target.name]: value, // Redefine o valor específico conforme houver alteração no formulário
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
        <br/><br/>
        <label>Your Message: {" "}
          <textarea 
            name="message"
            value={state.message}
            onChange={handleChange} />
        </label>
        <br/><br/>
        <label>
          Pick your favorite car brand:{" "}
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}>
              <option value="mercedes">Mercedes</option>
              <option value="bmw">BMW</option>
              <option value="maserati">Maserati</option>
              <option value="infinity">Infinity</option>
              <option value="audi">Audi</option>
          </select>
        </label>
        <br/><br/>
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange} />
          {" "}
          Is Checked?
        </label>
        <br /><br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleChange} />
          {" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleChange} />
          {" "}
          Female
        </label>
        <br/><br/>
        <label>
          Price (between 0 and 50):
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange} />
        </label>
      </form>
      <h2>## Values input ##</h2>
      <h5>Name: {state.fname} {state.lname}</h5>
      <h5>Message: {state.message}</h5>
      <h5>Favorite car brand: {state.carBrand}</h5>
      <h5>Is checked?: {state.isChecked ? "Yes" : "No"}</h5>
      <h5>Gender selected: {state.gender}</h5>
      <h5>Price: ${state.price}</h5>
    </div>
  );
}

export default App;
