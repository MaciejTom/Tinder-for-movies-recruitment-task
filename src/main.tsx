import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { createTheme} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { makeServer } from "./api/fakeBackend.ts"

makeServer()

const theme = createTheme({
  palette: {
    background: {
      default: "#ffe5b4",
    },
  },
  typography: {
    h1: {
      fontSize: 32,
    },
    fontFamily: 
      "Ubuntu",
  },
})


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
