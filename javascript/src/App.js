import React, { Component } from 'react';
import './App.css';
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios' ;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItem: '',
      foodGroup: null
    }
  }

  // Gets food groups and filters based on input
  async getFoodGroups(inputValue: string) {
    if (inputValue) {
      return axios.get('http://localhost:8000/foodgroups/?format=json')
        .then((response) => {
          return response.data.results.filter(i =>
            i.group_name.toLowerCase().includes(inputValue.toLowerCase())
          );
        });
    } else {
      return axios.get('http://localhost:8000/foodgroups/?format=json')
        .then((response) => {
          return response.data.results
        });
    }
  };

  foodGroupOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getFoodGroups(inputValue));
      }, 1000);
    });

    handleFoodGroupChange = (e) => {
      this.setState({
        foodGroup: e.group_name
      });
    }

  // Mapping to food group data
  getOptionValue = option => option.group_id;
  getOptionLabel = option => option.group_name;

  render() {
    return (
      <div>
      <h3>Select a Food Group First! </h3>
      <AsyncSelect
        cacheOptions
        defaultOptions
        isClearable
        loadOptions={this.foodGroupOptions}
        getOptionValue={this.getOptionValue}
        getOptionLabel={this.getOptionLabel}
        onChange={(e) => {this.handleFoodGroupChange(e)}}
      />
      <br/>
      <h3> Search for a single food item </h3>
      <AsyncSelect
        isClearable
        loadOptions={this.foodOptions}

      />

      </div>
    );
  }
}

export default App;
