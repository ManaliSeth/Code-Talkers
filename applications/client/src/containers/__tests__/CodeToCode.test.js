import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CodeToCode from "../codeToCode/CodeToCode";
import { BrowserRouter as Router } from "react-router-dom";
import StarRating from "../../components/StarRating";

test("render Code Form", () => {
  const { getByTestId } = render(
    <Router>
      <CodeToCode />
    </Router>
  );
  const codeForm = getByTestId("code-form");
  expect(codeForm).toBeDefined();
});

test("render Card", () => {
  const { getByTestId } = render(
    <Router>
      <CodeToCode />
    </Router>
  );
  const card = getByTestId("card");
  expect(card).toBeDefined();
});

test("render Feedback Form", () => {
  const { getByTestId } = render(
    <Router>
      <CodeToCode />
    </Router>
  );
  const feedbackForm = getByTestId("feedback-form");
  expect(feedbackForm).toBeDefined();
});

test("should give input box", () => {
  render(
    <Router>
      <CodeToCode />
    </Router>
  );
  screen.getAllByPlaceholderText("Source code");
});

const setup = () => {
  const utils = render(
    <Router>
      <CodeToCode />
    </Router>
  );
  const input = utils.getByPlaceholderText("Source code");
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
      <CodeToCode />
    </Router>
  );
  const submitButton = screen.getByText("Translate Code");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

test("does not trigger when required fields are empty for feedback form", async () => {
  const onSubmit = jest.fn();
  render(
    <Router>
      <CodeToCode />
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