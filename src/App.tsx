import React, { useEffect } from "react";
import { ListaDeTarefas } from "./pages/ListaDeTarefas";
import "./sass/header.scss";
import { HeaderNav } from "./layouts";

function App() {
  useEffect(() => {}, []);

  return (
    <main className="App ">
      <HeaderNav />

      <ListaDeTarefas />
    </main>
  );
}

export default App;
