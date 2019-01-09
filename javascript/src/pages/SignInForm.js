import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../lib/AuthService";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDashboard: false,
      errorMessage: ""
    };

    this.Auth = new AuthService();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError = error => {
    this.setState({
      toDashboard: false,
      errorMessage: error.response.data
    });
  };

  handleSuccess = response => {
    this.setState({
      toDashboard: true
    });
  };
  async handleSubmit(e) {
    e.preventDefault();

    let username = e.target[0].value;
    let password = e.target[1].value;

    this.Auth.login(username, password)
      .then(response => {
        this.handleSuccess(response);
      })
      .catch(error => this.handleError(error));
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/home" />;
    }
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
