import React from "react";
import ReactDOM from "react-dom";

import { cleanup, render } from "@testing-library/react";

import { TargetEntry } from "../components/TargetEntry";

afterEach(cleanup);

const testRemove = (name: string) => {
  console.log("test remove");
};

// eslint-disable-next-line jest/expect-expect
test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TargetEntry name="testName" remove={testRemove} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders Reviews title correctly", () => {
//   const { getByTestId } = render(<Reviews />);
//   expect(getByTestId("reviews")).toHaveTextContent("Reviews");
// });
