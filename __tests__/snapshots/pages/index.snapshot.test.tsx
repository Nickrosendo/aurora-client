import React from "react";
import renderer from "react-test-renderer";
import Index from "@root/pages/index";

jest.mock('@root/components', () => ({
	AdoptionList: jest.fn().mockImplementation(() => <>AdoptionList</>),
}));

it("should render homepage matching snapshot", () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
