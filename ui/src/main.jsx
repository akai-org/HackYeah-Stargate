import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./assets/theme";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
  </ThemeProvider>
);
