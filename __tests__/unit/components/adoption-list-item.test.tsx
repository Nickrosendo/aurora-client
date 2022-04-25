/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { AdoptionListItem } from "@root/components";

describe("AdoptionListItem component tests", () => {
  it("should render without crashing", () => {
    render(<AdoptionListItem item={{ title: "foo" }} />);
    const element = screen.getByTitle("adoption-list-item");

    expect(element).toBeInTheDocument();
  });
});
