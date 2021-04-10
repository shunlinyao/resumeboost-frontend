import React from "react";
import ReactDOM from "react-dom";

import { cleanup, fireEvent, render } from "@testing-library/react";

import { UserProfile } from "../pages/UserProfile";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test("renders add target position button", () => {
//   const { getByText } = render(<UserProfile />);
//   // expect(getByTestId("reviews")).toHaveTextContent("Reviews");
//   expect(getByText("Add Target Position")).toHaveTextContent(
//     "Add Target Position"
//   );
// });

test("renders add target company and position buttons", () => {
  const { getByText } = render(<UserProfile />);
  expect(getByText("Add Target Company")).toBeInTheDocument();
  expect(getByText("Add Target Position")).toBeInTheDocument();
});

test("inputting text updates the state of forms", () => {
  const { getByPlaceholderText, getByTestId } = render(<UserProfile />);
  fireEvent.change(getByPlaceholderText("enter company name"), {
    target: { value: "Text" },
  });

  expect(getByTestId("AddCompForm")).not.toBe("enter company name");
});

test("entering new position name and pushing add creates new position entry", () => {
  const { getByText, getByPlaceholderText, getByTestId, queryByText } = render(
    <UserProfile />
  );
  fireEvent.change(getByPlaceholderText("enter position name"), {
    target: { value: "1" },
  });
  fireEvent.click(getByText("Add Target Position"));
  expect(queryByText("1")).toBeTruthy();
  fireEvent.click(getByTestId("targetButton1"));
  expect(queryByText("1")).toBeFalsy();
});

test("entering new company name and pushing add creates new company entry", () => {
  const { getByText, getByPlaceholderText, getByTestId, queryByText } = render(
    <UserProfile />
  );
  fireEvent.change(getByPlaceholderText("enter company name"), {
    target: { value: "1" },
  });
  fireEvent.click(getByText("Add Target Company"));
  expect(queryByText("1")).toBeTruthy();
  fireEvent.click(getByTestId("targetButton1"));
  expect(queryByText("1")).toBeFalsy();
});

// test("clicking x deletes entry", () => {
//   const { getAllByText, queryAllByText } = render(<UserProfile />);
//   //expect(queryAllByText("x").length).toEqual(6);
//   const buttons = getAllByText("×");
//   for (let i = 0; i < buttons.length; i += 1) {
//     fireEvent.click(buttons[i]);
//   }
//   expect(queryAllByText("x").length).toEqual(0);
// });
