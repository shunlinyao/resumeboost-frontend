import React from "react";
import ReactDOM from "react-dom";

import { cleanup, fireEvent, render } from "@testing-library/react";

import { AddTargetEntry } from "../components/AddTargetEntry";

afterEach(cleanup);

// eslint-disable-next-line jest/expect-expect
test("renders without crashing", () => {
  const testAdd = (name: string) => {
    console.log("test add");
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <AddTargetEntry
      placeholder="testPlaceholder"
      buttonLabel="testButtonLabel"
      add={testAdd}
      addTargetForm="formid"
      addTargetButton="buttonid"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("clicking add button runs function", () => {
  let testVar = "0";
  const testAdd = (name: string) => {
    testVar = name;
  };
  const { getByText, getByPlaceholderText } = render(
    <AddTargetEntry
      placeholder="testPlaceholder"
      buttonLabel="testButtonLabel"
      add={testAdd}
      addTargetForm="formid"
      addTargetButton="buttonid"
    />
  );
  fireEvent.change(getByPlaceholderText("testPlaceholder"), {
    target: { value: "1" },
  });
  fireEvent.click(getByText("testButtonLabel"));
  expect(testVar).toEqual("1");
});

test("clicking add button with no input doesnt do anything", () => {
  let testVar = "0";
  const testAdd = (name: string) => {
    testVar = name;
  };
  const { getByText, getByPlaceholderText } = render(
    <AddTargetEntry
      placeholder="testPlaceholder"
      buttonLabel="testButtonLabel"
      add={testAdd}
      addTargetForm="formid"
      addTargetButton="buttonid"
    />
  );
  fireEvent.change(getByPlaceholderText("testPlaceholder"), {
    target: { value: "" },
  });
  fireEvent.click(getByText("testButtonLabel"));
  expect(testVar).toEqual("0");
});
