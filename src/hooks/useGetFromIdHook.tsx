import { useState, useEffect } from "react";
import { TarefasServices } from "../services/tarefasServices/TarefasServices";

export const useGetFromIdHook = (id: number) => {
  const [tarefa, setTarefa] = useState({
    id: 0,
    title: "",
    description: "",
    completed: "",
  });

  useEffect(() => {
    const getTarefa = TarefasServices.getById(id);
    setTarefa({
      id: getTarefa.id,
      title: getTarefa.title,
      description: getTarefa.description,
      completed: getTarefa.completed,
    });
  }, [id]);

  return tarefa;
};
