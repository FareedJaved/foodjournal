import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import FoodEntryForm from "./pages/FoodEntryForm";
import AuthService from "../src/lib/AuthService";

// protecting the route to home page
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        AuthService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
          <PrivateRoute path="/home" component={FoodEntryForm} />
        </div>
      </Router>
    );
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={() => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props}/>
//       : <Redirect to='/login' />
//   )} />
// )

export default App;
