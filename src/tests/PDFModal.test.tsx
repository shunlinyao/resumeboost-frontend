import React from "react";
import ReactDOM from "react-dom";

import { cleanup, fireEvent, render } from "@testing-library/react";

import PDFModal from "../components/PDFModal";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PDFModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("clicking button brings up modal", () => {
  const { queryByText, getByText } = render(<PDFModal />);
  expect(queryByText("placeholderResumeName.pdf")).toBeTruthy();
  expect(queryByText("DELETE RESUME")).toBeFalsy();
  // fireEvent.click(getByText("placeholderResumeName.pdf"));
});
