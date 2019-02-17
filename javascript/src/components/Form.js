import React, { Component } from "react";

const Form = ({ handleSubmit, buttonMsg, nextRoute, nextRouteMsg }) => (
  <div>
    <div className="Form Center">
      <form className="Form Fields" onSubmit={handleSubmit}>
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
          <button className="FormField__Button">{buttonMsg}</button>

          <Link to={nextRoute}>{nextRouteMsg}</Link>
        </div>
      </form>
    </div>
  </div>
);

export default Form;
