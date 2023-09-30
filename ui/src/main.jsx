import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { GlobalStyles } from "@mui/system";
import theme from "./assets/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles
      styles={{
        p: { fontSize: "16px" },
        h1: { fontSize: "3.5rem" },
        h2: { fontSize: "3rem" },
        h3: { fontSize: "2rem" },
        h4: { fontSize: "1.5rem" },
        h5: { fontSize: "1.125rem" },
      }}
    />
    <App />
  </ThemeProvider>
);
