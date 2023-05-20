import { Movie } from "../models/Movie";

export const fetchMoviesEndpoint = `/recommendations`;
export const acceptMovieEndopoint = (movieId: string) =>
  `/recommendations/${movieId}/accept`;
export const rejectMovieEndopoint = (movieId: string) =>
  `/recommendations/${movieId}/reject`;

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(fetchMoviesEndpoint, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err: any) {
    console.log(err);
    return [];
  }
};
export const acceptMovie = async (movieId: string): Promise<string> => {
  try {
    const response = await fetch(acceptMovieEndopoint(movieId), { method: "PUT" });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      return res.id;
    } catch (err: any) {
      console.log(err);
      return ''
    }
};
export const rejectMovie = async (movieId: string): Promise<string> => {
    try {
      const response = await fetch(rejectMovieEndopoint(movieId), { method: "PUT" });
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const res = await response.json();
        return res.id;
      } catch (err: any) {
        console.log(err);
        return ''
      }
  };
