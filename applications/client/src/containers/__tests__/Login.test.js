import React from "react";
import { render, firstEvent, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import LoginTest from "../account/Login";

test("renders text", () => {
  render(<LoginTest />);
  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});

test("email input should be rendered", () => {
  render(<LoginTest />);
  const emailElement = screen.getByPlaceholderText(/email/i);
  expect(emailElement).toBeInTheDocument();
});
test("password input should be rendered", () => {
  render(<LoginTest />);
  const passwordElement = screen.getByPlaceholderText(/password/i);
  expect(passwordElement).toBeInTheDocument();
});

test("Login should be rendered", () => {
  render(<LoginTest />);
  const buttonElement = screen.getByRole("Button");
  expect(buttonElement).toBeInTheDocument();
});
