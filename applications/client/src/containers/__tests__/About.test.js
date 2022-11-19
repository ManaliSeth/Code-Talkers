import { render, screen } from "@testing-library/react";
import About from "../about/About";

test("renders About intro", () => {
    render(<About />);
    const aboutElement = screen.getByText(/Connect with us!/i);
    expect(aboutElement).toBeInTheDocument();
});

test("render Team Member 1 info", () => {
    render(<About />);
    const name = screen.getByText(/Snehal Patil/i);
    const role = screen.getByText(/Team Leader/i);
    const member1Element = [name, role];
    
    expect(screen.getByText('mseth@mail.sfsu.edu').closest('a')).toHaveAttribute('href', 'mailto:spatil2@mail.sfsu.edu');
    expect(screen.getByText('Manali-Seth').closest('a')).toHaveAttribute('href', 'https://github.com/snehalp396');
    expect1(member1Element).toBeInTheDocument();
});

test("render Team Member 2 info", () => {
    render(<About />);
    const name = screen.getByText(/Manali Seth/i);
    const role = screen.getByText(/Github Master/i);
    const member2Element = [name, role];

    expect(screen.getByText('mseth@mail.sfsu.edu').closest('a')).toHaveAttribute('href', 'mailto:mseth@mail.sfsu.edu');
    expect(screen.getByText('Manali-Seth').closest('a')).toHaveAttribute('href', 'https://github.com/ManaliSeth');
    expect(member2Element).toBeInTheDocument();
});

test("should render Image1", () => {
    render(<About />);
    const imageElement = screen.getByAltText("Image1");
    expect(imageElement).toHaveAttribute("src", "snehal.png");
});

test("should render Image2", () => {
    render(<About />);
    const imageElement = screen.getByAltText("Image2");
    expect(imageElement).toHaveAttribute("src", "manali.png");
});

  