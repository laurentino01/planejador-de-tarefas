import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./context/ThemeContext";

import { HeaderNav } from "./layouts";
import { AppRoutes } from "./routes/routing";
import "./sass/header.scss";
import {
  IListaTarefasData,
  TarefasServices,
} from "./services/tarefasServices/TarefasServices";

function App() {
  const [lista, setLista] = useState<IListaTarefasData[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  useEffect(() => {
    const listaTarefas = TarefasServices.getAll()?.tarefas;
    if (listaTarefas) {
      setLista(listaTarefas);
    }
  }, [isOpen]);

  return (
    <>
      <AppThemeProvider>
        <BrowserRouter>
          <HeaderNav
            handleOpen={handleOpen}
            handleClose={handleClose}
            isOpen={isOpen}
          />
          <AppRoutes
            handleOpen={handleOpen}
            handleClose={handleClose}
            isOpen={isOpen}
            lista={lista}
          />
        </BrowserRouter>
      </AppThemeProvider>
    </>
  );
}

export default App;
