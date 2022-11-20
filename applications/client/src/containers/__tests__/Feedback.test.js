import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Feedback from "../feedback/Feedback";
import { Table } from "react-bootstrap";

test("renders feedback table", () => {
  render(<Feedback />);
  const table = screen.getByTestId("feedback-table");
  expect(table).toBeInTheDocument();
});

test("renders header in Feedback Table", () => {
  render(<Feedback />);
  const headers = screen.getAllByRole("columnheader");
  expect(headers).toBeInTheDocument();
});

test("renders rows in Feedback Table", () => {
  render(<Feedback />);
  const rows = screen.getAllByRole("table-rows");
  expect(rows).toBeInTheDocument();
});
