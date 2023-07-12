import React, { useCallback, useEffect, useState } from "react";
import {
  IListaTarefasData,
  TarefasServices,
} from "../services/tarefasServices/TarefasServices";
import { ModalOptions } from "../components";

import { Typography } from "@mui/material";
import { TarefasTable } from "../components/tarefasTable/TarefasTable";
import { useHandleTarefas } from "../hooks/useHandleTarefas";
import { EnvironmentViriables } from "../../environment/EnviromentVariables";

export const ListaDeTarefas = () => {
  let storage: Storage = localStorage[EnvironmentViriables.LIST_NAME];

  const [lista, setLista] = useState<IListaTarefasData[]>([]);
  const [controlModal, setControlModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [idTarefa, setIdTarefa] = useState("");
  const [targetTarefa, setTargetTarefa] = useState<IListaTarefasData>({
    id: "",
    titulo: "",
    description: "",
    status: false,
  });

  const listaTarefas = useHandleTarefas().lista;

  const openModal = (
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

  useEffect(() => {
    if (listaTarefas) {
      setLista(listaTarefas);
    }
  }, [listaTarefas, storage]);

  return (
    <main className="container tasks-area">
      {controlModal ? (
        <ModalOptions
          option={modalOption}
          idTarefa={idTarefa}
          closeModal={() => setControlModal(false)}
          targetTarefa={targetTarefa}
        />
      ) : null}

      <Typography
        marginTop={5}
        textAlign={"center"}
        variant="h4"
        component={"h1"}
      >
        Lista de Tarefas
      </Typography>

      <TarefasTable
        lista={lista}
        setTargetTarefa={setTargetTarefa}
        openModal={openModal}
      />
    </main>
  );
};
