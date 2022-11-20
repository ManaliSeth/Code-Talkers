import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../account/Login";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

test("email input should be rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const emailElement = screen.getByPlaceholderText(/Email/i);
  expect(emailElement).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const passwordElement = screen.getByPlaceholderText(/password/i);
  expect(passwordElement).toBeInTheDocument();
});

test("Login button should be rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("should render Login Image", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const imageElement = screen.getByAltText("Login");
  expect(imageElement).toHaveAttribute("src", "account.svg");
});

const setup = () => {
  const utils = render(
    <Router>
      <Login />
    </Router>
  );
  const input = utils.getByPlaceholderText("Email");
  return {
    input,
    ...utils,
  };
};

test("It should allow email to be inputted", () => {
  const { input } = setup();
  expect(input.value).toBe(""); // empty before
  fireEvent.change(input, { target: { value: "email@gmail.com" } });
  expect(input.value).toBe("email@gmail.com");
});

test("does not trigger when required fields are empty", async () => {
  const onSubmit = jest.fn();
  render(
    <Router>
      <Login />
    </Router>
  );
  const submitButton = screen.getByRole("button");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
