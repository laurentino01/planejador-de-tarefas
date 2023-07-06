import { extendTheme } from "@mui/joy";

export const LightThemeJoi = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          mainChannel: "#0c70f2",
        },

        background: {
          body: "F5F5F5",
        },
      },
    },
  },
});
