import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import FoodEntryForm from "./pages/FoodEntryForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/home" component={FoodEntryForm} />
        </div>
      </Router>
    );
  }
}

export default App;
