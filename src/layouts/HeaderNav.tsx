import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/header.scss";

export const HeaderNav = () => {
  return (
    <header className="container header ">
      <h6>Organização</h6>
      <nav>
        <NavLink to={"/"}>Tarefas</NavLink>
      </nav>
    </header>
  );
};
