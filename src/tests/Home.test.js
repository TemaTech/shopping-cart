import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("'Home' component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("opens the catalog page when clicking on the 'Explore Our Color Collection' button", () => {
    const button = screen.getByRole('link', {  name: /explore our color collection/i});
    userEvent.click(button);
    const productCardName = screen.getByText(/space gray/i);
    expect(productCardName).toBeInTheDocument();
  });
});
