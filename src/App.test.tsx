import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the Header component", () => {
    render(<App />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });

  it("renders the Movies component", () => {
    render(<App />);
    const spinnerOfMovieComponent = screen.getByRole("loading-spinner");
    expect(spinnerOfMovieComponent).toBeInTheDocument();
  });

  it("renders the Container component with correct padding", () => {
    render(<App />);
    const container = screen.getByRole("main");
    expect(container).toHaveStyle({ paddingTop: 5});
  });
});






