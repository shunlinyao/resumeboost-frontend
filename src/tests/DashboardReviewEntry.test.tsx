import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import { TableContainer, Table, TableBody } from "@windmill/react-ui";
import ReviewEntry from "../components/DashboardReviewEntry";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <TableContainer className="max-w-4xl" data-testid="reviews">
      <div className="p-4 font-bold">Reviews</div>
      <Table>
        <TableBody>
          <ReviewEntry
            date="2015-01-24"
            visual={4}
            content={3}
            relevance={5}
            comment="test comment"
          />
        </TableBody>
      </Table>
    </TableContainer>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders ScoreCard score correcetly", () => {
  const { getByTestId } = render(
    <TableContainer className="max-w-4xl" data-testid="reviews">
      <div className="p-4 font-bold">Reviews</div>
      <Table>
        <TableBody>
          <ReviewEntry
            date="2015-01-24"
            visual={4}
            content={3}
            relevance={5}
            comment="test comment"
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
  expect(getByTestId("date")).toHaveTextContent("Jan 24, 2015");
  expect(getByTestId("visual")).toHaveTextContent("4");
  expect(getByTestId("content")).toHaveTextContent("3");
  expect(getByTestId("relevance")).toHaveTextContent("5");
  expect(getByTestId("comment")).toHaveTextContent("test comment");
});
