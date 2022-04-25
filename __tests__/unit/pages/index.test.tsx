/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@root/pages/index";

describe("Home page tests", () => {
  it("renders the header component", () => {
    render(<Home />);

    const element = screen.getByRole("main");

    expect(element).toBeInTheDocument();
  });
});
