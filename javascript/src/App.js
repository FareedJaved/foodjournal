import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import FoodSearch from "./pages/FoodSearch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/home" component={FoodSearch} />
        </div>
      </Router>
    );
  }
}

export default App;
