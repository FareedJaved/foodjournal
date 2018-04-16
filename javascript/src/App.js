import React, { Component } from 'react';
import './App.css';
import {FoodList} from './FoodList'; 
import Select from 'react-select'; 
import 'react-select/dist/react-select.css';
import axios from 'axios' ; 


class App extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      foodItem: '', 
      foodList: [],
      foodGroup: '',
      foodGroupList:[],
     
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

  // Calling the spring backend for the FDA food items
  getOptions = (input, callback) => {
    if (!input) {
			return Promise.resolve({ options: [] });
    }
    return axios.get(`http://localhost:8080/search?item=${input}`)
      .then((response)=> response.json())
      .then((json)=> {
        console.log("I am inside getOptions")
        return { options: json.list.item }
      })
  };

  // This will be used for the button that chooses 
	// the particular food group. Whatver gets chosen here 
	// should probably get integrated with getOptions since 
	// we want that to be bundled together for the backend... 
  getFoodGroups = (input) => {
    if (!input) {
			return Promise.resolve({ options: [] });
    }
    return axios.get('http://localhost:8080/foodgroup')
      .then((response)=> {
        console.log(response.data.list.item)
        return {options: response.data.list.item}
      }) 
  }
  onManufacturerChange = (input) => {
    this.setState({
      manufacturer: input,
    })
  }

  onItemChange = (value, prevState) =>  {
    this.setState({
      
      foodItem: prevState.concat(value),
    });
  }

  render() {
    const AsyncComponent = Select.Async; 
    return (
    <div>

      <FoodList 
        foodList={this.state.foodList} 
        handleDelete={(id) => this.handleDelete(id)} 
      />

      {/* User selects the food group that the items they ate belongs to */}
      <h3>Select the food groups in which the things you ate belong to </h3>
      <Select.Async multi={true} value={this.state.manufacturer} 
        onChange={this.onManufacturerChange} 
        onValueClicked={console.log("Clicked")}
        valueKey="name" labelKey="name" 
        loadOptions={this.getFoodGroups} 
      /> 

      {/* User selects what they ate */}
      <br/> 
      <h3>What did you eat today?</h3> 
      <AsyncComponent multi={true} value={this.state.foodItem} 
        onChange={this.onItemChange} loadOptions={this.getOptions}
        backspaceRemoves={true} placeholder={"Food Item"} /> 
      <br/> 
    
    </div>
    );
  }
}

export default App;
