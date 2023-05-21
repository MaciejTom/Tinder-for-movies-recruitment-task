import { useEffect, useState } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { Movie } from "../models/Movie";
import { fetchMovies } from "../api/moviesApi";

export const Movies = () => {
  const [movies, setMovies] = useState([] as Movie[]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetchMovies();
        setMovies(res);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    getMovies();
  }, []);

  if (isLoading) {
    return <CircularProgress role="loading-spinner" />;
  }
  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {movies.map((film) => (
        <Grid item xs={12} sm={6} md={4} key={film.id}>
          <MovieCard {...film} />
        </Grid>
      ))}
    </Grid>
  );
};
