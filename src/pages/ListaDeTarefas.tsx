import React, { useEffect, useState } from "react";
import { TarefasServices } from "../services/tarefasServices/TarefasServices";
import { Tarefa, ModalOptions } from "../components";
import { Add } from "@mui/icons-material";
import { ITarefa } from "../interfaces/ITarefa";
import "../sass/tasks-area.scss";

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

  useEffect(() => {
    const results = TarefasServices.getAll();
    if (results) setLista(results);
  }, [targetTarefa]);

  const changeStatus = (id, title, description, status: boolean) => {
    TarefasServices.updateById(id, title, description, status);
  };

  useEffect(() => {
    changeStatus(
      targetTarefa.id,
      targetTarefa.title,
      targetTarefa.description,
      targetTarefa.completed
    );
  }, [targetTarefa]);

  return (
    <section className="container tasks-area">
      {controlModal ? (
        <ModalOptions
          option={modalOption}
          idTarefa={idTarefa}
          closeModal={() => setControlModal(false)}
          targetTarefa={targetTarefa}
        />
      ) : null}

      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>
          {lista.map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              id={tarefa.id}
              title={tarefa.title}
              description={tarefa.description}
              completed={tarefa.completed}
              openModal={openModal}
              setTargetTarefa={setTargetTarefa}
            />
          ))}
          <tr>
            <td>Nova tarefa... </td>
            <td> </td>
            <td>
              <button
                onClick={() =>
                  openModal(0, "string", "string", false, "create")
                }
              >
                <Add></Add>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
