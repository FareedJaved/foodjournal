import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../lib/AuthService";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toSignin: false,
      usernameError: null,
      passwordError: null
    };

    this.Auth = new AuthService();
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError = error => {
    this.setState({
      toSignin: false,
      usernameError: JSON.stringify(error.response.data.username),
      passwordError: JSON.stringify(error.response.data.password)
    });
  };

  handleSuccess = response => {
    this.setState({
      toSignin: true
    });
  };

  async handleSubmit(e) {
    e.preventDefault();

    let username = e.target[0].value;
    let password = e.target[1].value;

    this.Auth.signup(username, password)
      .then(response => {
        this.handleSuccess(response);
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  render() {
    if (this.state.toSignin === true) {
      return <Redirect to="/signin" />;
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

            {this.state.usernameError}

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

            {this.state.passwordError}

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
