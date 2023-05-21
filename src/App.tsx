import "./App.css";
import { Container } from "@mui/material";

import { Movies } from "./components/Movies";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container component="main" sx={{ pt: 5 }} role="main">
        <Movies />
      </Container>
    </>
  );
}

export default App;
