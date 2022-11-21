import { render, fireEvent, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextToCode from "../textToCode/TextToCode";
import { BrowserRouter as Router } from "react-router-dom";
import StarRating from "../../components/StarRating";
import '@testing-library/jest-dom';
import React, { useState } from 'react';

test("should display the correct number of options", () => {
  render(
    <Router>
      <TextToCode />
    </Router>
  );
  expect(screen.getAllByRole("option").length).toBe(3);
});

// Integration Test
test("should allow user to change programming langage", () => {
  render(
    <Router>
      <TextToCode />
    </Router>
  );
  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "Java" })
  );
  expect(screen.getByRole("option", { name: "Python" }).selected).toBe(false);
  expect(screen.getByRole("option", { name: "Java" }).selected).toBe(true);
  expect(screen.getByRole("option", { name: "C++" }).selected).toBe(false);

  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "C++" })
  );
  expect(screen.getByRole("option", { name: "C++" }).selected).toBe(true);
});

test("render Code Form", () => {
  const { getByTestId } = render(
    <Router>
      <TextToCode />
    </Router>
  );
  const codeForm = getByTestId("code-form");
  expect(codeForm).toBeDefined();
});

test("render Card", () => {
  const { getByTestId } = render(
    <Router>
      <TextToCode />
    </Router>
  );
  const card = getByTestId("card");
  expect(card).toBeDefined();
});

test("render Feedback Form", () => {
  const { getByTestId } = render(
    <Router>
      <TextToCode />
    </Router>
  );
  const feedbackForm = getByTestId("feedback-form");
  expect(feedbackForm).toBeDefined();
});

test("should give input box", () => {
  render(
    <Router>
      <TextToCode />
    </Router>
  );
  screen.getAllByPlaceholderText("Enter your question");
});

const setup = () => {
  const utils = render(
    <Router>
      <TextToCode />
    </Router>
  );
  const input = utils.getByPlaceholderText("Enter your question");
  return {
    input,
    ...utils,
  };
};

// Integration test
test("It should allow question/text to be inputted", () => {
  const { input } = setup();
  expect(input.value).toBe(""); // empty before
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe("Good Day");
  fireEvent.change(input, { target: { value: "" } });
  expect(input.value).toBe("");
});

test("does not trigger when required fields are empty for code form", async () => {
  const onSubmit = jest.fn();
  render(
    <Router>
      <TextToCode />
    </Router>
  );
  const submitButton = screen.getByText("Generate Code");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

test("does not trigger when required fields are empty for feedback form", async () => {
  const onSubmit = jest.fn();
  render(
    <Router>
      <TextToCode />
    </Router>
  );
  const submitButton = screen.getByText("Submit Feedback");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

test("Star Rating selected or not selected", () => {
  const rating=0;
  const hover=0;

  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const onClick = jest.fn();
  const handleInput=jest.fn();

  const { container } = render (
    <div className="star">
      {[1, 2, 3, 4, 5].map((ratingValue) => {
        return (
          <StarRating
            key={ratingValue}
            ratingValue={ratingValue}
            hover={hover}
            rating={rating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            onChange={handleInput}
          />
        );
      })}
    </div>
    )
    
  const starNotSelected = container.querySelectorAll(".grey");
  expect(starNotSelected.length).toBe(5);
});

test("Star Rating selected", () => {
  const rating=3;
  const hover=3;

  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const onClick = jest.fn();
  const handleInput=jest.fn();

  const { container } = render(
    <div>
      {[1, 2, 3, 4, 5].map((ratingValue) => {
        return (
          <StarRating
            key={ratingValue}
            ratingValue={ratingValue}
            hover={hover}
            rating={rating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            onChange={handleInput}
          />
        );
      })}
    </div>
  );

  const starSelected = container.querySelectorAll(".yellow");
  expect(starSelected.length).toBe(3);
});
