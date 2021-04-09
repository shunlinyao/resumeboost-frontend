import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/LogIn";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders components correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  expect(getByTestId("title")).toHaveTextContent("Log In");
  expect(getByTestId("link")).toHaveTextContent("Sign Up");
  expect(getByTestId("email")).toHaveTextContent("E-mail");
  expect(getByTestId("password")).toHaveTextContent("Password");
  expect(getByTestId("submit")).toHaveTextContent("Submit");
});
