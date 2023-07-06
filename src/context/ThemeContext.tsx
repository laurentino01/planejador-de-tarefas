import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from "react";
import { LightTheme } from "../themes/lightTheme";
import { DarkTheme } from "../themes/DarkTheme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";

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
  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  const toggleTheme = useCallback(() => {
    setThemeName((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);
  return (
    <themeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width={"100vw"}
          height={"auto"}
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
