import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box } from "@mui/system";
import {
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Switch,
} from "@mui/material";

import { useAppThemeContext } from "../../context/ThemeContext";
import { AppDrawer } from "../AppDrawer";
import { SunIcon } from "../../components/icons/SunIcon";
import { MoonIcon } from "../../components/icons/MoonIcon";
import { switchStyle } from "./headerNav.style";
import { NewModalControl } from "../../components/newModal/index";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";

export const HeaderNav = ({
  isOpen,
  handleClose,
  handleOpen,
  modalOption,
  setModalOption,
}) => {
  const { toggleTheme } = useAppThemeContext();
  const theme = useTheme();
  const [check, setCheck] = useState(
    theme.palette.mode === "light" ? true : false
  );
  /*   const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false); */

  const handleToggle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);

    toggleTheme();
  }, []);

  const mediaDownMD = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenModal = () => {
    setModalOption("create");
    handleOpen();
  };

  return (
    <>
      {isOpen && (
        <NewModalControl
          handleClose={handleClose}
          isOpen={isOpen}
          option={modalOption}
          targetTarefa={{} as IListaTarefasData}
        />
        /* <NewCreateModal isOpen={isOpen} handleClose={handleClose} /> */
      )}
      {mediaDownMD && (
        <Box
          sx={{
            backgroundColor: `${theme.palette.primary.main}`,
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          <Typography component={"h6"} variant="h4" color={"white"}>
            Organização
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding:
            "20px  clamp(1.25rem, 0.8929rem + 1.7857vw, 2.5rem) 10px 20px",
          maxWidth: "1440px",
          marginX: "auto",
          backgroundColor: `${theme.palette.primary.main}`,
        }}
      >
        <Box component={"nav"} sx={{ display: "flex", alignItems: "center" }}>
          {!mediaDownMD && (
            <Typography
              sx={{ cursor: "pointer" }}
              component={"h6"}
              variant="h4"
              color={"white"}
            >
              Organização
            </Typography>
          )}

          <Box
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
                padding: "7px 20px 18.5px 20px",
                borderRadius: "5px 5px 0 0",
                cursor: "pointer",
                transition: "0.3s",
              },
            }}
          >
            {mediaDownMD && <AppDrawer />}
            {!mediaDownMD && (
              <Typography sx={{ fontWeight: "600" }}>
                <NavLink to={"/"}>Tarefas</NavLink>
              </Typography>
            )}
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Switch
            checked={check}
            checkedIcon={<SunIcon />}
            icon={<MoonIcon />}
            onChange={(e) => {
              handleToggle(e);
            }}
            sx={switchStyle}
          />

          {mediaDownMD && (
            <AddCircleIcon
              onClick={handleOpenModal}
              sx={{
                fontSize: 40,
                color: "white",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          )}

          {!mediaDownMD && (
            <Button
              onClick={handleOpenModal}
              sx={{
                color: "white",
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
          )}
        </Box>
      </Box>
    </>
  );
};
