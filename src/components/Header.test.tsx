import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the header text", () => {
    render(<Header />);
    const headerText = screen.getByText("Tinder for movies");
    expect(headerText).toBeInTheDocument();
  });
});