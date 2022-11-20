import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CodeToText from "../codeToText/CodeToText";
import { BrowserRouter as Router } from "react-router-dom";

test("renders code to text page", async () => {
  render(
    <Router>
      <CodeToText />
    </Router>
  );
  const codeElement = screen.getByTestId("code-form");
  expect(codeElement).toBeInTheDocument();
});

test("renders text", () => {
  render(
    <Router>
      <CodeToText />
    </Router>
  );
  const loginElement = screen.getByText(/Generate Explanation for your code/i);
  expect(loginElement).toBeInTheDocument();
});

test("render Feedback Form", () => {
  const { getByTestId } = render(
    <Router>
      <CodeToText />
    </Router>
  );
  const feedbackForm = getByTestId("feedback-form");
  expect(feedbackForm).toBeDefined();
});

test("render Card", () => {
  const { getByTestId } = render(
    <Router>
      <CodeToText />
    </Router>
  );
  const card = getByTestId("card");
  expect(card).toBeDefined();
});

test("should give input box", () => {
  render(
    <Router>
      <CodeToText />
    </Router>
  );
  screen.getAllByPlaceholderText("Enter your code");
});

const setup = () => {
  const utils = render(
    <Router>
      <CodeToText />
    </Router>
  );
  const input = utils.getByPlaceholderText("Enter your code");
  return {
    input,
    ...utils,
  };
};

test("It should allow question/text to be inputted", () => {
  const { input } = setup();
  expect(input.value).toBe(""); // empty before
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe("Good Day");
});

test("does not trigger when required fields are empty for code form", async () => {
  const onSubmit = jest.fn();
  render(
    <Router>
      <CodeToText />
    </Router>
  );
  const submitButton = screen.getByText("Get Explanation");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

test("does not trigger when required fields are empty for feedback form", async () => {
  const onSubmit = jest.fn();
  render(
    <Router>
      <CodeToText />
    </Router>
  );
  const submitButton = screen.getByText("Submit Feedback");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
