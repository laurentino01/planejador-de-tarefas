import React, { useEffect, useState } from "react";
import {
  IListaTarefasData,
  TarefasServices,
} from "../services/tarefasServices/TarefasServices";
import { ModalOptions } from "../components";

import { Typography } from "@mui/material";
import { TarefasTable } from "../components/tarefasTable/TarefasTable";

import { NewModalControl } from "../components/newModal";

export const ListaDeTarefas = () => {
  const [lista, setLista] = useState<IListaTarefasData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [controlModal, setControlModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  /* const [idTarefa, setIdTarefa] = useState(""); */
  const [targetTarefa, setTargetTarefa] = useState<IListaTarefasData>({
    id: "",
    titulo: "",
    description: "",
    status: false,
  });
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  useEffect(() => {
    const listaTarefas = TarefasServices.getAll()?.tarefas;
    if (listaTarefas) {
      setLista(listaTarefas);
    }
  }, [isOpen]);

  /* const openModal = (
    id: string,
    title: string,
    description: string,
    completed: boolean,
    opt: string
  ) => {
    setTargetTarefa({
      id: id,
      titulo: title,
      description: description,
      status: completed,
    });

    setControlModal(true);
    if (opt !== "create") {
      setModalOption(opt);
      setIdTarefa(id);
    } else {
      setModalOption(opt);
    }
  };
 */
  return (
    <main className="container tasks-area">
      {/* {controlModal ? (
        <ModalOptions
          option={modalOption}
          idTarefa={idTarefa}
          closeModal={() => setControlModal(false)}
          targetTarefa={targetTarefa}
        />
      ) : null} */}

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
