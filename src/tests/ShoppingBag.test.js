import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("'ShoppingBag' component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("opens shopping bag", () => {
    const button = screen.getByTestId('shopping-bag-button');
    userEvent.click(button);
    const checkoutButton = screen.getByRole('button', {  name: /checkout/i});
    expect(checkoutButton).toBeInTheDocument();
  });
});
