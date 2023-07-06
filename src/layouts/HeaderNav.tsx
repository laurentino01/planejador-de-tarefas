import React, { useCallback, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
/* import "../sass/header.scss"; */
import { CssVarsProvider, Button } from "@mui/joy";
import Switch from "@mui/joy/Switch";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";

import { Box, SxProps, Typography, useTheme } from "@mui/material";

import { useAppThemeContext } from "../context/ThemeContext";

export const HeaderNav = () => {
  const [check, setCheck] = useState(false);

  const { toggleTheme, themeName } = useAppThemeContext();

  const theme = useTheme();

  const handleDarkMode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheck(e.target.checked);

      toggleTheme();
    },
    []
  );

  const darkModeSwitchStyleSX: SxProps = {
    "& .MuiSwitch-track": {
      backgroundColor: themeName === "light" ? "white" : "black",
    },
    "& .MuiSwitch-thumb": {
      backgroundColor:
        themeName === "light" ? "black" : `${theme.palette.secondary.main}`,
    },
    "--Switch-thumbSize": "25px",
    "--Switch-trackHeight": "30px",
    "--Switch-trackWidth": "60px",
  };
  return (
    <CssVarsProvider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px 10px 20px",
          maxWidth: "1440px",
          marginX: "auto",
          backgroundColor: `${theme.palette.primary.main}`,
        }}
      >
        <Box component={"nav"} sx={{ display: "flex", alignItems: "center" }}>
          <Typography component={"h6"} variant="h4" color={"white"}>
            Organização
          </Typography>

          <Box
            component={"a"}
            sx={{
              background: "none",
              ":hover": { background: "none" },
              color: "white",
              "& a": {
                color: "white",
                textDecoration: "none",
                marginLeft: "20px",
                marginBottom: 0,
                fontSize: "22px",
              },
              "a.active": {
                border: "none",
                color: `${theme.palette.primary.main}`,
                backgroundColor: "white",
                padding: "7px 20px 15px 20px",
                borderRadius: "5px 5px 0 0",
                cursor: "pointer",
                transition: "0.3s",
              },
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>
              <NavLink to={"/"}>Tarefas</NavLink>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              marginRight: "20px",
              backgroundColor: `${theme.palette.secondary.main}`,
              transition: "0.3s",
              ":hover": {
                backgroundColor: `${theme.palette.secondary.dark}`,
              },
            }}
          >
            Adicionar Nova Tarefa
          </Button>
          <Switch
            variant="solid"
            checked={check}
            onChange={handleDarkMode}
            sx={darkModeSwitchStyleSX}
            slotProps={{
              thumb: {
                input: { "aria-label": "dark mode" },
                children: check ? (
                  <Brightness7Icon
                    fontSize="small"
                    sx={{ color: `${theme.palette.secondary.main}` }}
                  />
                ) : (
                  <Brightness2Icon fontSize="small" sx={{ color: "white" }} />
                ),
              },
            }}
          />
        </Box>
      </Box>
    </CssVarsProvider>
  );
};
