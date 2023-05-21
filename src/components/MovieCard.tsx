import { useState } from "react";
import { Movie } from "../models/Movie";
import {useSwipe} from "../hooks/useSwipe";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { acceptMovie, rejectMovie } from "../api/moviesApi";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

type Props = Movie;

export const MovieCard = ({ id, imageURL, title, summary, rating }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const swipeHandlers = useSwipe({ onSwiped: () => handleReject(id) });

  const handleAccept = async (movieId: string) => {
    setIsLoading(true);
    const res = await acceptMovie(movieId);
    console.log("Accepted film: " + res); //For recruitment purposes
    setIsLoading(false);
  };

  const handleReject = async (movieId: string) => {
    setIsLoading(true);
    const res = await rejectMovie(movieId);
    console.log("Rejected film: " + res); //For recruitment purposes
    setIsLoading(false);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }} {...swipeHandlers}>
      <CardMedia
        sx={{ height: 450, position: "relative", backgroundPosition: "top" }}
        image={imageURL}
        title={title}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
          }}
        >
          <CardHeader title={title} />
          <CardContent sx={{ py: 0 }}>
            <Typography>{`(${rating}/10)`}</Typography>
            <Typography>{summary}</Typography>
          </CardContent>

          <CardActions
            sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}
          >
            {isLoading ? (
              <CircularProgress size={32} />
            ) : (
              <>
                <Button
                  onClick={() => handleAccept(id)}
                  size="small"
                  variant="contained"
                  color="success"
                >
                  <DoneIcon /> Accept
                </Button>
                <Button
                  onClick={() => handleReject(id)}
                  size="small"
                  variant="contained"
                  color="error"
                >
                  Reject
                  <CloseIcon />
                </Button>
              </>
            )}
          </CardActions>
        </Box>
      </CardMedia>
    </Card>
  );
};