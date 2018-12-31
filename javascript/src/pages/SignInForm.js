import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInForm extends Component {
  handleSubmit = () => {
    // This function will sign in a User
    // and take them to the home page
  };
  render() {
    return (
      <div className="Form Center">
        <form className="Form Fields" onSubmit={this.handleSubmit}>
          <div className="Form Field">
            <label className="FormField__Label" htmlFor="name">
              Username
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
              placeholder="Enter Password"
              name="password"
            />
          </div>
          <div className="Form Field">
            <button className="FormField__Button">Sign-In</button>

            <Link to="/">Create an Account.</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
