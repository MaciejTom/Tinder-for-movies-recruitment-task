import { render, waitFor, screen } from "@testing-library/react";
import {Movies} from "./Movies";
import { fetchMovies } from "../api/moviesApi";
import { vi } from "vitest";

vi.mock("../api/moviesApi");
const mockedFetchMovies = fetchMovies as jest.Mock;

describe("Movies", () => {
  const movies = [
    {
      id: "1",
      imageURL: "https://example.com/image1.jpg",
      title: "Movie 1",
      summary: "Lorem ipsum dolor sit amet 1.",
      rating: 7.5,
    },
    {
      id: "2",
      imageURL: "https://example.com/image2.jpg",
      title: "Movie 2",
      summary: "Lorem ipsum dolor sit amet 2.",
      rating: 8.0,
    },
  ];

  it("should render movies correctly", async () => {
    mockedFetchMovies.mockResolvedValue(movies);
    render(<Movies />);
    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
      expect(screen.getByText("Movie 2")).toBeInTheDocument();
    });
  });

  it("should display loading spinner while fetching movies", async () => {
    render(<Movies />);
    const loadingSpinner = screen.getByRole("loading-spinner");

    expect(loadingSpinner).toBeInTheDocument();

    await waitFor(() => {
      expect(loadingSpinner).not.toBeInTheDocument();
    });
  });

  it("should display error message if fetching movies fails", async () => {
    const errorMessage = "Failed to fetch movies";
    mockedFetchMovies.mockRejectedValue(new Error(errorMessage));

    render(<Movies />);

    const errorElement = await screen.findByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
