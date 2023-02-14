import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import "@testing-library/jest-dom"; 

describe("'App' component", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("Renders home page by default", () => {
    it("renders the slogan", () => {
      const slogan = screen.getByText(  /"embrace the power of color, let it illuminate your path to discovery\."/i);
      expect(slogan).toBeInTheDocument();
    });

    it("renders home page button", () => {
      const button = screen.getByText(/explore our color collection/i);
      expect(button).toBeInTheDocument();
    });
  });
});