import { render, screen } from "@testing-library/react";
import About from "../about/About";
import { BrowserRouter as Router } from "react-router-dom";

test("renders About intro", () => {
  render(
    <Router>
      <About />
    </Router>
  );
  const aboutElement = screen.getByText(/Connect with us!/i);
  expect(aboutElement).toBeInTheDocument();
});

test("render Team Member 1 info", () => {
  render(
    <Router>
      <About />
    </Router>
  );
  const name = screen.getByText(/Snehal Patil/i);
  const role = screen.getByText(/Team Leader/i);

  expect(
    screen.getByText("spatil2@mail.sfsu.edu").closest("a")
  ).toHaveAttribute("href", "mailto:spatil2@mail.sfsu.edu");
  expect(screen.getByText("snehalp396").closest("a")).toHaveAttribute(
    "href",
    "https://github.com/snehalp396"
  );
  expect(name).toBeInTheDocument();
  expect(role).toBeInTheDocument();
});

test("render Team Member 2 info", () => {
  render(
    <Router>
      <About />
    </Router>
  );
  const name = screen.getByText(/Manali Seth/i);
  const role = screen.getByText(/Github Master/i);
  const member2Element = [name, role];

  expect(screen.getByText("mseth@mail.sfsu.edu").closest("a")).toHaveAttribute(
    "href",
    "mailto:mseth@mail.sfsu.edu"
  );
  expect(screen.getByText("Manali-Seth").closest("a")).toHaveAttribute(
    "href",
    "https://github.com/ManaliSeth"
  );
  expect(member2Element).toBeInTheDocument();
});

test("should render Image1", () => {
  render(
    <Router>
      <About />
    </Router>
  );
  const imageElement = screen.getByAltText("Image1");
  expect(imageElement).toHaveAttribute("src", "snehal.png");
});

test("should render Image2", () => {
  render(
    <Router>
      <About />
    </Router>
  );
  const imageElement = screen.getByAltText("Image2");
  expect(imageElement).toHaveAttribute("src", "manali.png");
});
