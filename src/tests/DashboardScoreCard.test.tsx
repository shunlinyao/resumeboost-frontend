import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import ScoreCard from "../components/DashboardScoreCard";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ScoreCard metric="Visual" score={4.7} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders ScoreCard metric correcetly", () => {
  const { getByTestId } = render(<ScoreCard metric="metric" score={4.7} />);
  expect(getByTestId("scorecard")).toHaveTextContent("metric");
});

it("renders ScoreCard score correcetly", () => {
  const { getByTestId } = render(<ScoreCard metric="metric" score={4.7} />);
  expect(getByTestId("scorecard")).toHaveTextContent("4.7");
});
