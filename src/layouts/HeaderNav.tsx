import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../sass/header.scss";
import Switch from "@mui/joy/Switch";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { Button, SxProps } from "@mui/material";

const darkModeSwitchStyleSX: SxProps = {
  "--Switch-thumbSize": "25px",
  "--Switch-trackHeight": "30px",
  "--Switch-trackWidth": "60px",
};

export const HeaderNav = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  return (
    <header className="container header ">
      <div>
        <h6>Organização</h6>

        <nav>
          <NavLink to={"/"}>Tarefas</NavLink>
        </nav>
      </div>

      <div>
        {/* <Switch
          variant="plain"
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
        /> */}
      </div>
    </header>
  );
};
