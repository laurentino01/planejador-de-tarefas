import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/header.scss";
import { Icon, Switch, SwitchProps } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const HeaderNav = () => {
  return (
    <header className="container header ">
      <h6>Organização</h6>
      <nav>
        <NavLink to={"/"}>Tarefas</NavLink>
      </nav>

      <div>
        <Switch
          checkedIcon={<Brightness7Icon />}
          className="muiSwitch"
          defaultChecked
        />
      </div>
    </header>
  );
};
