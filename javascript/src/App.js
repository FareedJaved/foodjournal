import React, { Component } from 'react';
import './App.css';
import {FoodList} from './FoodList'; 
import Select, { Async } from 'react-select'; 
import 'react-select/dist/react-select.css';

class App extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      foodItem: '', 
      manufacturer:'',
      foodList: []
    }
  }

  // takes a list and an item and vendor 
  // returns a list with the first 
  remove = (list, date ) =>  {
    return list.filter(e => e.id !== date)
  }
  // will take the key and value that need to be deleted 
  // from the map 
  handleDelete = (id) => {
    let listAfterDelete = this.remove(this.state.foodList, id)
    this.setState({
      foodList: listAfterDelete
    })
    console.log("deleting item from map")
  }

  componentDidUpdate() {
    console.log(this.state.foodList)
  }
  // handles the form being submitted 
  handleFormSubmit = (e) => {
    e.preventDefault();

    const newFoodItem = {
      item: this.state.foodItem,
      vendor: this.state.manufacturer,
      id: Date.now()
    }

    this.setState(prevState => ({
      foodItem: '',
      manufacturer: '',
      foodList: prevState.foodList.concat(newFoodItem)
    }))

  }


  // calling the rails backend for the FDA food items
  getOptions = (input, callback) => {
    let myFakeOptions = [{value: 'one', label: 'One'}]
    setTimeout(() => {
      callback(null, {
        options: myFakeOptions,
        // CAREFUL! Only set this to true when there are no more options,
        // or more specific queries will not be sent to the server.
        complete: true
      });
    }, 500);
  };

  render() {
    let value = ''
    return (
    <div>

      <FoodList 
        foodList={this.state.foodList} 
        handleDelete={(id) => this.handleDelete(id)} 
      />

      <form onSubmit={(e) => {this.handleFormSubmit(e)} }>
          Food Item: 
          <input type="text" value={this.state.foodItem} 
            onChange={(e) => this.setState({foodItem: e.target.value})}
          /> 
          <br/> 
          Manufacturer:  
          <input type="text" value={this.state.manufacturer} 
            onChange={(e) => this.setState({manufacturer: e.target.value})}
          />
          <br/> 
          {/* Submit Button */ }
          <input type="submit" name="Submit" /> 
        </form>

        <Select
          name="foodItem"
          value={value}
          onChange = {(e)=> this.setState({foodItem: e.target.value})}

        /> 
    </div>
    );
  }
}

export default App;
