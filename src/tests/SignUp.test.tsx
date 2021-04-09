import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
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
  expect(getByTestId("email")).toHaveTextContent("E-mail");
  expect(getByTestId("password")).toHaveTextContent("Password");
  expect(getByTestId("submit")).toHaveTextContent("Submit");
});
