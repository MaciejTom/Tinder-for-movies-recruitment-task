import { render, screen, fireEvent, act } from "@testing-library/react";
import { MovieCard } from "./MovieCard";
import { vi } from "vitest";
import { acceptMovie, rejectMovie } from "../api/moviesApi";

vi.mock("../api/moviesApi");

const mockMovie = {
  id: "1",
  imageURL: "https://example.com/image.jpg",
  title: "Example Movie",
  summary: "This is an example movie.",
  rating: 8,
};

describe("MovieCard", () => {
  it("renders the movie title and summary", () => {
    render(<MovieCard {...mockMovie} />);
    expect(screen.getByText("Example Movie")).toBeInTheDocument();
    expect(screen.getByText(mockMovie.summary)).toBeInTheDocument();
  });

  it("calls the acceptMovie function when the accept button is clicked", async () => {
    render(<MovieCard {...mockMovie} />);
    const acceptButton = screen.getByText("Accept");
    await act(async () => {
      fireEvent.click(acceptButton);
    });
    expect(acceptMovie).toHaveBeenCalledWith(mockMovie.id);
  });

  it("calls the rejectMovie function when the reject button is clicked", async () => {
    render(<MovieCard {...mockMovie} />);
    const rejectButton = screen.getByText("Reject");
    await act(async () => {
      fireEvent.click(rejectButton);
    });
    expect(rejectMovie).toHaveBeenCalledWith(mockMovie.id);
  });
});
