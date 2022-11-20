import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextToCode from "../textToCode/TextToCode";

test("should display dropdown, input and output boxes, buttons, feedback form ", () => {
  render(<TextToCode />);
  screen.debug();
});

it("should correctly set default option", () => {
  render(<TextToCode />);
  expect(screen.getByRole("option", { name: "Python" }).selected).toBe(true);
});

it("should display the correct number of options", () => {
  render(<TextToCode />);
  expect(screen.getAllByRole("option").length).toBe(3);
});

it("should allow user to change programming langage", () => {
  render(<TextToCode />);
  userEvent.selectOptions(
    // Find the select element, like a real user would.
    screen.getByRole("combobox"),
    // Find and select the Java option, like a real user would.
    screen.getByRole("option", { name: "Java" })
  );
  expect(screen.getByRole("option", { name: "Java" }).selected).toBe(true);
});

test("render Code Form", () => {
  const { getByTestId } = render(<TextToCode />);
  const codeForm = getByTestId("code-form");
  expect(codeForm).toBeDefined();
});

test("render Feedback Form", () => {
  const { getByTestId } = render(<TextToCode />);
  const feedbackForm = getByTestId("feedback-form");
  expect(feedbackForm).toBeDefined();
});

test("render Card", () => {
  const { getByTestId } = render(<TextToCode />);
  const card = getByTestId("card");
  expect(card).toBeDefined();
});

test("should give input box", () => {
  render(<TextToCode />);
  screen.getAllByPlaceholderText("Enter your question");
});

const setup = () => {
  const utils = render(<TextToCode />);
  const input = utils.getByPlaceholderText("Enter your question");
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

it("does not trigger when required fields are empty for code form", async () => {
  const onSubmit = jest.fn();
  render(<TextToCode />);
  const submitButton = screen.getByText("Generate Code");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

it("does not trigger when required fields are empty for feedback form", async () => {
  const onSubmit = jest.fn();
  render(<TextToCode />);
  const submitButton = screen.getByText("Submit Feedback");
  await waitFor(() => userEvent.click(submitButton));
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
