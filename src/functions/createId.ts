import { ITarefasData } from "../services/tarefasServices/TarefasServices";

export const createId = (arr: ITarefasData[] | undefined) => {
  if (arr === undefined) {
    return;
  }
  return arr.length + 1;
};
