import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../sass/header.scss";
import Switch from "@mui/joy/Switch";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { Grid, SxProps } from "@mui/material";
import { Box } from "@mui/system";

const darkModeSwitchStyleSX: SxProps = {
  "--Switch-thumbSize": "20px",
};

export const HeaderNav = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  return (
    <header className="container header ">
      <h6>Organização</h6>

      <nav>
        <NavLink to={"/"}>Tarefas</NavLink>
      </nav>

      <Switch
        checked={check}
        onChange={handleCheck}
        sx={darkModeSwitchStyleSX}
        slotProps={{
          thumb: {
            input: { "aria-label": "dark mode" },
            children: check ? (
              <Brightness7Icon fontSize="small" color="primary" />
            ) : (
              <Brightness2Icon fontSize="small" />
            ),
          },
        }}
      />
    </header>
  );
};
