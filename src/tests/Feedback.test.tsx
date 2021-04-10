import React from "react";
import ReactDOM from "react-dom";
import { Form, useFormik } from "formik";
import Slider from "rc-slider";
import { render, cleanup } from "@testing-library/react";
import { Badge, Button, Label, Textarea } from "@windmill/react-ui";
import Feedback from "../components/Feedback";
afterEach(cleanup);
jest.mock("../components/PDFView", () => () => <div>PDF Content</div>);

// eslint-disable-next-line jest/expect-expect
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Feedback />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//it("renders feedback correcetly", () => {
//  const { getByTestId } = render(<Feedback/>);
//  expect(getByTestId("feedback")).toHaveTextContent("submit");
//});
