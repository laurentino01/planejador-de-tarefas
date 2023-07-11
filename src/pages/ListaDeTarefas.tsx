import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  IListaTarefasData,
  TarefasServices,
} from "../services/tarefasServices/TarefasServices";
import { ModalOptions } from "../components";

import { ITarefa } from "../interfaces/ITarefa";
/* import "../sass/tasks-area.scss"; */
import { TableRow, Typography } from "@mui/material";
import { TarefasTable } from "../components/tarefasTable/TarefasTable";

export const ListaDeTarefas = () => {
  const [lista, setLista] = useState<IListaTarefasData[]>([]);
  const [controlModal, setControlModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [idTarefa, setIdTarefa] = useState(0);
  const [targetTarefa, setTargetTarefa] = useState<ITarefa>({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });

  const openModal = (
    id: number,
    title: string,
    description: string,
    completed: boolean,
    opt: string
  ) => {
    setTargetTarefa({
      id: id,
      title: title,
      description: description,
      completed: completed,
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
    const listaTarefas = TarefasServices.getAll()?.tarefas;
    if (listaTarefas) {
      setLista(listaTarefas);
    }
  }, []);

  const handleTarefaById = useCallback((id: string) => {
    const tarefa = TarefasServices.getById(id);
    if (tarefa) {
      return tarefa;
    }
    return undefined;
  }, []);

  const handleUpdateById = useCallback(
    (id: string, title: string, description: string, status: boolean) => {
      TarefasServices.updateById(id, title, description, status);
    },
    []
  );

  const handleDeleteById = useCallback((id: string) => {
    TarefasServices.deleteById(id);
  }, []);

  const handleCreate = useCallback((title: string, description: string) => {
    TarefasServices.create(title, description);
  }, []);

  /* const changeStatus = (id, title, description, status: boolean) => {
    TarefasServices.updateById(id, title, description, status);
  }; */
  /* 
  useEffect(() => {
    changeStatus(
      targetTarefa.id,
      targetTarefa.title,
      targetTarefa.description,
      targetTarefa.completed
    );
  }, [targetTarefa]); */

  const teste: any[] = [];
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
        openModal={openModal}
        setTargetTarefa={setTargetTarefa}
      />
    </main>
  );
};
