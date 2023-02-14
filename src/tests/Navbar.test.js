import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import "@testing-library/jest-dom"; 

describe("'Navbar' component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the logotype", () => {
    const logotype = screen.getByText(/chroma haven/i);
    expect(logotype).toBeInTheDocument();
  });

  it("renders the 'Home' button", () => {
    const homeButton = screen.getByText(/home/i);
    expect(homeButton).toBeInTheDocument();
  });

  it("renders the 'Catalog' button", () => {
    const catalogButton = screen.getByText(/catalog/i);
    expect(catalogButton).toBeInTheDocument();
  });

  it("renders the shopping bag button", () => {
    const shoppingBagButton = screen.getByTestId('shopping-bag-button');
    expect(shoppingBagButton).toBeInTheDocument();
  });
});