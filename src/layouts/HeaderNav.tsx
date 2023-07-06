import React, { useCallback, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
/* import "../sass/header.scss"; */
import Switch from "@mui/joy/Switch";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useTheme } from "@mui/material";
import { Box, SxProps, Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import { useAppThemeContext } from "../context/ThemeContext";

const darkModeSwitchStyleSX: SxProps = {
  "--Switch-thumbSize": "25px",
  "--Switch-trackHeight": "30px",
  "--Switch-trackWidth": "60px",
};

export const HeaderNav = () => {
  const [check, setCheck] = useState(false);

  const { toggleTheme } = useAppThemeContext();

  const theme = useTheme();

  const handleDarkMode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheck(e.target.checked);

      toggleTheme();
    },
    []
  );

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        maxWidth: "1440px",
        marginX: "auto",
      }}
    >
      <Box component={"nav"} sx={{ display: "flex", alignItems: "center" }}>
        <Typography component={"h6"} variant="h4">
          Organização
        </Typography>

        <Button sx={{ background: "none", ":hover": { background: "none" } }}>
          <NavLink to={"/"}>Tarefas</NavLink>
        </Button>
      </Box>

      <Box>
        <Switch
          variant="solid"
          checked={check}
          onChange={handleDarkMode}
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
      </Box>
    </Box>
  );
};
