import React, { useEffect, useState } from "react";
import { TarefasServices } from "../services/tarefasServices/TarefasServices";
import { ModalOptions } from "../components";

import { ITarefa } from "../interfaces/ITarefa";
/* import "../sass/tasks-area.scss"; */
import { TableRow, Typography } from "@mui/material";
import { TarefasTable } from "../components/tarefasTable/TarefasTable";

export const ListaDeTarefas = () => {
  const [lista, setLista] = useState<Array<any>>([]);
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

  useEffect(() => {}, [targetTarefa]);

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
