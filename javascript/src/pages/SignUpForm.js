import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
      token: null,
      usernameError: null,
      passwordError: null
    };

    this.handleState = this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError = error => {
    this.setState({
      toHome: false,
      token: null,
      usernameError: JSON.stringify(error.response.data.username),
      passwordError: JSON.stringify(error.response.data.password)
    });
  };

  handleState = response => {
    console.log("Hello from handleState");
    this.setState({
      toHome: true,
      token: response.token
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    // Insert logic to handle bad input
    let headers = {
      "content-type": "application/json"
    };

    return axios
      .post(
        "http://localhost:8000/api/auth/register/",
        {
          username: e.target[0].value,
          password: e.target[1].value
        },
        headers
      )
      .then(response => {
        this.handleState(response);
      })
      .catch(error => {
        // console.log(error);
        this.handleError(error);
      });
  }

  render() {
    if (this.state.toHome === true) {
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
