import React, { Component } from "react";
import FoodSearch from "./FoodSearch";
import DatePick from "../lib/DatePick";

class FoodEntryForm extends Component {
  render() {
    return (
      <div>
        <DatePick />
        <FoodSearch />
      </div>
    );
  }
}

export default FoodEntryForm;
