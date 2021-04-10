import React from "react";
import ReactDOM from "react-dom";

import { cleanup, fireEvent, render } from "@testing-library/react";

import { ABTesting } from "../pages/ABTesting";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ABTesting />, div);
  ReactDOM.unmountComponentAtNode(div);
});
