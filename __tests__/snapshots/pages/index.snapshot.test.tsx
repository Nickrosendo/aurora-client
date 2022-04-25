import React from "react";
import renderer from "react-test-renderer";
import Index from "@root/pages/index";

it("should render homepage matching snapshot", () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
