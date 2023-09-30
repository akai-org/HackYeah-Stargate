import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    success: "#A1E6B8",
    danger: "#E6E1A1",
    error: "#E6AEA1",
  },
  colors: {
    primary: "#8FABCC",
    secondary: "#F5C687",
    white: "#FEFEFE",
    black: "#121212",
    grey: "#A3A9BF",
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
    },
    h2: {
      fontSize: "1.75rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1.125rem",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        textDecoration: "none",
        fontFamily: "Roboto",
        underlineHover: "none",
      }
    }
  }
});

export default theme;
