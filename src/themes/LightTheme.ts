import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      400: "#0c70f2",
      main: "#0c70f2",
    },
    secondary: {
      main: "#f49034",
      dark: "CA7322",
    },
    background: {
      default: "F5F5F5",
      paper: "#0c70f2",
    },
  },
});
