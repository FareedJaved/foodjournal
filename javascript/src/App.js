import React, { Component } from 'react';
import './App.css';
import AsyncSelect from 'react-select/lib/Async';
import 'react-select/dist/react-select.css';
import axios from 'axios' ;


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      foodItem: '',
      foodGroup: '',
    }
  }

  loadOptions = (input, callback) => {
    if (!input) {
			return Promise.resolve({ options: [] });
    }
    return axios.get(`http://localhost:8000/search?item=${input}`)
      .then((response)=> {
        console.log(response)
        return {options: response.data.list.item}
      })
  };

  getFoodGroups = (input) => {
    if (input) {
      return axios.get('http://localhost:8000/foodgroups/?format=json')
        .then((response)=> {
          console.log(response.data.results.map(x => x['group_name']))
          return response.data.results.map(x => x['group_name'])
        })
    }

  }

  onFoodGroupChange = (input) => {
    this.setState({
      foodGroup: input,
    })
  }

  onItemChange = (value) =>  {
    this.setState({
      foodItem: value,
    });
  }

  loadFoodGroupOptions = (inputValue: string) => {
    setTimeout(() => {
      console.log(inputValue)
      this.getFoodGroups(inputValue);
    }, 5000);
  };


  render() {
    return (
      <div>

        <h3>Select a food group first </h3>
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadFoodGroupOptions}
          defaultOptions
          onInputChange={this.onFoodGroupChange}
        />

        <br/>

        <h3>Enter what you ate</h3>
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadOptions}
          defaultOptions
          onInputChange={this.onItemChange}
        />

        <br/>

      </div>
    );
  }
}

export default App;
