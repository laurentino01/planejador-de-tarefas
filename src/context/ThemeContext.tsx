import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { LightTheme } from "../themes/LightTheme";
import { DarkTheme } from "../themes/DarkTheme";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

interface IThemeContextProps {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}
const themeContext = createContext({} as IThemeContextProps);

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const storage = typeof window !== "undefined" ? localStorage.theme : "dark";

  const [themeName, setThemeName] = useState<"light" | "dark">(storage);

  const toggleTheme = useCallback(() => {
    setThemeName((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  const mediaDownMD = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    localStorage.setItem("theme", theme.palette.mode);
    setThemeName(theme.palette.mode);
  }, [theme, themeName, theme.palette.mode]);

  return (
    <themeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width={"100vw"}
          minHeight={"100vh"}
          height={"auto"}
          paddingBottom={mediaDownMD ? 5 : 0}
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </themeContext.Provider>
  );
};

export const useAppThemeContext = () => {
  return useContext(themeContext);
};
