import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../pages/SignUp";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders components correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
  expect(getByTestId("title")).toHaveTextContent("Sign Up");
  expect(getByTestId("link")).toHaveTextContent("Log in");

  const email = getByTestId("email");
  expect(email).toHaveTextContent("E-mail");
  const inputInEmail = within(email).getAllByTestId("input");
  expect(inputInEmail.length).toBe(1);

  const password = getByTestId("password");
  expect(password).toHaveTextContent("Password");
  const inputInPassword = within(password).getAllByTestId("input");
  expect(inputInPassword.length).toBe(1);

  expect(getByTestId("submit")).toHaveTextContent("Submit");
});
