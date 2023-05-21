import { AppBar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar sx={{ background: "#1c1c1c" }}>
      <Typography variant="h1" sx={{ py: 1 }}>
        Tinder for movies
      </Typography>
    </AppBar>
  );
};
