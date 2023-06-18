import React, { useEffect } from "react";
import { ListaDeTarefas } from "./pages/ListaDeTarefas";
import "./sass/header.scss";
import { db } from "./services/db/db";
import { NavLink } from "react-router-dom";

function App() {
  useEffect(() => {
    if (localStorage.length === 0) {
      localStorage.setItem("db", JSON.stringify(db));
    }
  }, []);

  return (
    <main className="App ">
      <header className="container header ">
        <h6>Organização</h6>
        <nav>
          <NavLink to={"/"}>Tarefas</NavLink>
        </nav>
      </header>

      <ListaDeTarefas />
    </main>
  );
}

export default App;
