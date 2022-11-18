import { render, fireEvent, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CodeToCode from "../codeToCode/CodeToCode";

test("should display dropdown, input and output boxes, buttons, feedback form ", () => {
    render(<CodeToCode />)
    screen.debug();
});

test("render Code Form", () => {
    const {getByTestId} = render(<CodeToCode />);
    const codeForm = getByTestId('code-form');
    expect(codeForm).toBeDefined();
});

test("render Feedback Form", () => {
    const {getByTestId} = render(<CodeToCode />);
    const feedbackForm = getByTestId('feedback-form');
    expect(feedbackForm).toBeDefined();
});

test("render Card", () => {
    const {getByTestId} = render(<CodeToCode />);
    const card = getByTestId('card');
    expect(card).toBeDefined();
});

test('should give input box', () => {
    render(<CodeToCode />)
    screen.getAllByPlaceholderText("Source code");
});

const setup = () => {
    const utils = render(<CodeToCode />)
    const input = utils.getByPlaceholderText('Source code')
    return {
      input,
      ...utils,
    }
};

test('It should allow question/text to be inputted', () => {
    const {input} = setup()
    expect(input.value).toBe('') // empty before
    fireEvent.change(input, {target: {value: 'Good Day'}})
    expect(input.value).toBe('Good Day')
});

it("does not trigger when required fields are empty for code form", async () => {
    const onSubmit = jest.fn();
    render(<CodeToCode />);
    const submitButton = screen.getByText('Translate Code')
    await waitFor(() => userEvent.click(submitButton))
    expect(onSubmit).toHaveBeenCalledTimes(0)
});

it("does not trigger when required fields are empty for feedback form", async () => {
    const onSubmit = jest.fn();
    render(<CodeToCode />);
    const submitButton = screen.getByText('Submit Feedback')
    await waitFor(() => userEvent.click(submitButton))
    expect(onSubmit).toHaveBeenCalledTimes(0)
});


