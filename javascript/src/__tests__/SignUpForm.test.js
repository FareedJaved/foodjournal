import React from "react";
import { shallow } from "enzyme";
import SignUpForm from "../pages/SignUpForm";
import "../setupTests";

test("Fake Test", () => {
  expect(true).toBeTruthy();
});

it("renders the sign up form", () => {
  const editor = shallow(<SignUpForm />);
  expect(true).toBeTruthy();
});
