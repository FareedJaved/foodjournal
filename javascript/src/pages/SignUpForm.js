import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class SignUpForm extends Component {
  state = {
    toHome: false
  };
  handleSubmit = e => {
    // FIrst save the user
    //then call setState
  };
  render() {
    if (this.state.toHome === true) {
      <Redirect to="/signin" />;
    }
    return (
      <div>
        <div className="Form Center">
          <form className="Form Fields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                User Name
              </label>
              <input
                type="text"
                id="name"
                className="FormField__Input"
                placeholder="Enter your Username"
                name="name"
              />
            </div>

            <div className="Form Field">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your Password"
                name="password"
              />
            </div>

            <div className="Form Field">
              <button className="FormField__Button">Sign-Up</button>

              <Link to="/signin">I'm already a Member.</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
