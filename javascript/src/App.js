import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// in charge of displaying the list of food items 
// entered on a specific date 
class FoodList extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      foodList: new Map(),  
    }
  }

  render() {
    return(
    <div>
      <ul>
        {this.state.foodList.forEach((val,key,map) => 
          <li>{key} from {val}</li>
        )}
      </ul> 
      <button>Add Item</button>
    </div>
    );
  }
}

class App extends Component {

  handleFormSubmit(e) {
    e.preventDefault(); 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <FoodList/>
        <form onSubmit={this.handleFormSubmit}>
          
        </form>
      </div>
    );
  }
}

export default App;
