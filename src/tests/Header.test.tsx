import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import Header from "../components/Header";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header title="Test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Header title correctly", () => {
  const { getByTestId } = render(<Header title="Test" />);
  expect(getByTestId("Header")).toHaveTextContent("Test");
});
