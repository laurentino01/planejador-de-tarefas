import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./context/ThemeContext";

import { HeaderNav } from "./layouts";
import { AppRoutes } from "./routes/routing";
import "./sass/header.scss";

function App() {
  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>
          <HeaderNav />
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
