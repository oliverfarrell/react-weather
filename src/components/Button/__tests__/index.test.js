import React from "react";
import { mount } from "enzyme";
import { matchers } from "jest-emotion";

import Button from "components/Button";

expect.extend(matchers);

describe("button", () => {
  let wrapper;

  it("renders without crashing", () => {
    wrapper = mount(<Button>Example</Button>);
  });

  it("should render a button", () => {
    expect(wrapper.find("button")).toBeTruthy();
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("disabled button", () => {
  let wrapper;

  it("renders without crashing", () => {
    wrapper = mount(<Button disabled />);
  });

  it("should render a button with the disabled attribute", () => {
    expect(wrapper.find("button").prop("disabled")).toBeTruthy();
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("full-width button", () => {
  let wrapper;

  it("renders without crashing", () => {
    wrapper = mount(<Button full />);
  });

  it("should have appropriate style rules", () => {
    expect(wrapper).toHaveStyleRule("justify-content", "center");
    expect(wrapper).toHaveStyleRule("width", "100%");
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
