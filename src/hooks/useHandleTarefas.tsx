import { useCallback } from "react";
import { TarefasServices } from "../services/tarefasServices/TarefasServices";

export const useHandleTarefas = () => {
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
    []
  );

  const handleDeleteById = useCallback((id: string) => {
    TarefasServices.deleteById(id);
  }, []);

  const handleCreate = useCallback((title: string, description: string) => {
    TarefasServices.create(title, description);
  }, []);

  return {
    handleTarefaById,
    handleUpdateById,
    handleDeleteById,
    handleCreate,
  };
};
