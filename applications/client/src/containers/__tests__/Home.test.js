import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../home/Home";

test("renders Welcome Text", () => {
  render(<Home />);
  const homeElement = screen.getByText(/CSC 890 Graduate Seminar Project/i);
  expect(homeElement).toBeInTheDocument();
});
test("render code to text card", () => {
  render(<Home />);
  const codeToTextElement = screen.getByText(/Code To Text/i);
  expect(codeToTextElement).toBeInTheDocument();
});
test("render code to code card", () => {
  render(<Home />);
  const codeToCodeElement = screen.getByText(/Code To Code/i);
  expect(codeToCodeElement).toBeInTheDocument();
});
test("render text to code card", () => {
  render(<Home />);
  const textToCodeElement = screen.getByText(/Text To Code/i);
  expect(textToCodeElement).toBeInTheDocument();
});
test("should render Image1", () => {
  render(<Home />);
  const imageElement = screen.getByAltText("Image1");
  expect(imageElement).toHaveAttribute("src", "1.png");
});
test("should render Image2", () => {
  render(<Home />);
  const imageElement = screen.getByAltText("Image2");
  expect(imageElement).toHaveAttribute("src", "2.png");
});
test("should render Image3", () => {
  render(<Home />);
  const imageElement = screen.getByAltText("Image3");
  expect(imageElement).toHaveAttribute("src", "3.png");
});
