import React from "react";
import ReactDOM from "react-dom";

import { cleanup, render } from "@testing-library/react";

import Reviews from "../components/DashboardReviews";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Reviews />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("renders Reviews title correctly", () => {
//   const { getByTestId } = render(<Reviews />);
//   expect(getByTestId("reviews")).toHaveTextContent("Reviews");
// });
