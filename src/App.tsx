import "./App.css";
import { AppBar, Container, Typography } from "@mui/material";

import Movies from "./components/Movies";

function App() {
  return (
    <>
    
      <AppBar sx={{ background: "#1c1c1c"}}>
        <Typography variant="h1" sx={{ py: 1 }}>
          Tinder for movies
        </Typography>
      </AppBar>
      <Container component="main" sx={{ pt: 5 }}>
        <Movies />
      </Container>
    </>
  );
}

export default App;
