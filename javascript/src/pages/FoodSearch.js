import React, { Component } from "react";
import axios from "axios";
import AsyncSelect from "react-select/lib/Async";

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItem: "",
      foodGroup: null
    };
  }

  /* Gets food groups and filters based on input */
  async getFoodGroups(inputValue) {
    if (inputValue) {
      return axios
        .get("http://localhost:8000/foodgroups/?format=json")
        .then(response => {
          return response.data.results.filter(i =>
            i.group_name.toLowerCase().includes(inputValue.toLowerCase())
          );
        });
    } else {
      return axios
        .get("http://localhost:8000/foodgroups/?format=json")
        .then(response => {
          return response.data.results;
        });
    }
  }

  foodGroupOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getFoodGroups(inputValue));
      }, 1000);
    });

  handleFoodGroupChange = e => {
    if (e) {
      this.setState({
        foodGroup: e.group_name
      });
    }
  };

  // This is not currently functional
  handleFoodChange = e => {
    if (e) {
      this.setState({
        foodItem: e
      });
    }
  };

  // Mapping to food group data
  getOptionValue = option => option.group_id;
  getOptionLabel = option => option.group_name;

  render() {
    return (
      <div>
        <h3>Select a Food Group</h3>

        <AsyncSelect
          cacheOptions
          defaultOptions
          isClearable
          loadOptions={this.foodGroupOptions}
          getOptionValue={this.getOptionValue}
          getOptionLabel={this.getOptionLabel}
          onChange={e => {
            this.handleFoodGroupChange(e);
          }}
        />

        <br />
        <h3>Enter a food item that you ate. </h3>
        <AsyncSelect
          isClearable
          loadOptions={this.foodOptions}
          onInputChange={e => {
            this.handleFoodChange(e);
          }}
        />
        <br />
      </div>
    );
  }
}

export default FoodSearch;
