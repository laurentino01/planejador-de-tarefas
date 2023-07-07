import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
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
    mode: "dark",
    primary: {
      main: "#0c70f2",
    },
    secondary: {
      main: "#f49034",
      dark: "CA7322",
    },
    background: {
      paper: "#303134",
      default: "#202124",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});
