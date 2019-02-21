import React from "react";
import { mount } from "enzyme";
import { matchers } from "jest-emotion";

import Spinner from "components/Spinner";
import Circle from "components/Spinner/Circle";

expect.extend(matchers);

describe("spinner", () => {
  let wrapper;

  it("renders without crashing", () => {
    wrapper = mount(<Spinner />);
  });

  it("renders 12 <Circle /> components", () => {
    expect(wrapper.find(Circle).length).toBe(12);
  });
});
