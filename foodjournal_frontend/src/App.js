import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form, Text, Radio, TextArea} from 'react-form'; 


class FoodForm extends Component { 
  render() {
    return(
    <div>
      <h1>hi everyone </h1> 
    </div>); 
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <FoodForm/> 
        </p>
      </div>
    );
  }
}

export default App;
