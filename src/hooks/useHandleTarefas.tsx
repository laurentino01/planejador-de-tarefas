import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  IListaTarefasData,
  TarefasServices,
} from "../services/tarefasServices/TarefasServices";
import { EnvironmentViriables } from "../../environment/EnviromentVariables";

export const useHandleTarefas = () => {
  let storage: Storage = localStorage[EnvironmentViriables.LIST_NAME];

  const [lista, setLista] = useState<IListaTarefasData[]>([]);

  useEffect(() => {
    const listaTarefas = TarefasServices.getAll()?.tarefas;
    if (listaTarefas) {
      setLista(listaTarefas);
    }
  }, [storage]);

  const handleTarefaById = useCallback((id: string) => {
    const tarefa = TarefasServices.getById(id);
    if (tarefa) {
      return tarefa;
    }
  }, []);

  const handleUpdateById = useCallback(
    (id: string, title: string, description: string, status: boolean) => {
      TarefasServices.updateById(id, title, description, status);
    },
    [storage]
  );

  const handleDeleteById = useCallback((id: string) => {
    TarefasServices.deleteById(id);
  }, []);

  const handleCreate = useCallback((title: string, description: string) => {
    TarefasServices.create(title, description);
  }, []);

  return {
    lista,
    handleTarefaById,
    handleUpdateById,
    handleDeleteById,
    handleCreate,
  };
};
