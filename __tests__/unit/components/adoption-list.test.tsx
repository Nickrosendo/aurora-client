/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { AdoptionList } from "@root/components";

describe("AdoptionList component tests", () => {
  it("should render without crashing", () => {
    render(<AdoptionList items={[]} />);
    const element = screen.getByTitle("adoption-list-container");

    expect(element).toBeInTheDocument();
  });

  it("should render the provided amount of itens", () => {
    const mockItems = [{ title: "foo" }];
    render(<AdoptionList items={mockItems} />);
    const element = screen.getByTitle("adoption-list-container");

    expect(element.childElementCount).toBe(mockItems.length);
  });
});
