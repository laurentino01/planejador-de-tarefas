import React, { useState } from "react";
import {
  IListaTarefasData,
  TarefasServices,
} from "../services/tarefasServices/TarefasServices";
import { ModalOptions } from "../components";

import { Alert, Snackbar, Typography } from "@mui/material";
import { TarefasTable } from "../components/tarefasTable/TarefasTable";

import { NewModalControl } from "../components/newModal";

export const ListaDeTarefas = ({
  lista,
  isOpen,
  handleClose,
  handleOpen,
  modalOption,
  setModalOption,
}) => {
  const [targetTarefa, setTargetTarefa] = useState<IListaTarefasData>({
    id: "",
    titulo: "",
    description: "",
    status: false,
  });
  const [act, setAct] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const handleSnackClose = () => setSnackOpen(false);
  const handleSnackOpen = () => setSnackOpen(true);
  const handleAct = (act: string) => setAct(act);

  return (
    <main className="container tasks-area">
      <Typography
        marginTop={5}
        textAlign={"center"}
        variant="h4"
        component={"h1"}
      >
        Lista de Tarefas
      </Typography>

      {isOpen && (
        <NewModalControl
          targetTarefa={targetTarefa}
          isOpen={isOpen}
          option={modalOption}
          handleClose={handleClose}
          handleSnackOpen={handleSnackOpen}
          handleAct={handleAct}
        />
      )}

      <TarefasTable
        lista={lista}
        setTargetTarefa={setTargetTarefa}
        setModalOption={setModalOption}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />

      <Snackbar
        autoHideDuration={6000}
        onClose={handleSnackClose}
        open={snackOpen}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          item {act} com sucesso!
        </Alert>
      </Snackbar>
    </main>
  );
};
