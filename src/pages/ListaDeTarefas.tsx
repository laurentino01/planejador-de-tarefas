import React, { useState } from "react";
import {
  IListaTarefasData,
  TarefasServices,
} from "../services/tarefasServices/TarefasServices";
import { ModalOptions } from "../components";

import { Typography } from "@mui/material";
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
        />
      )}

      <TarefasTable
        lista={lista}
        setTargetTarefa={setTargetTarefa}
        setModalOption={setModalOption}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </main>
  );
};
