import { EnvironmentViriables } from "../../../environment/EnviromentVariables";

export interface ITarefasData {
  id: number;
  titulo: string;
  description: string;
  status: boolean;
}
export interface IListaData {
  tarefas: ITarefasData[];
  count: number;
}

const getAll = () => {
  try {
    const result = localStorage.getItem(EnvironmentViriables.LIST_NAME);
    if (result) {
      const listaTarefas: IListaData = JSON.parse(result);
      return listaTarefas;
    }
  } catch (err) {
    new Error(err.message);
  }
};

const getById = (id: number) => {
  try {
    const tarefasData = getAll();
    const tarefas = tarefasData?.tarefas;
    const searchTarefa = tarefas?.find((o) => o.id === id);
    if (searchTarefa !== undefined) {
      return searchTarefa;
    }
  } catch (err) {
    new Error(err.message);
  }
};

const create = ({
  titulo,
  description,
}: Omit<ITarefasData, "id" & "status">) => {
  try {
    const tarefasData = getAll();
    const tarefas = tarefasData?.tarefas;
    if (tarefas) {
      const newTarefa: ITarefasData = {
        id: tarefas.length + 1,
        titulo: titulo,
        description: description,
        status: false,
      };

      tarefas.push(newTarefa);
      localStorage.setItem(
        EnvironmentViriables.LIST_NAME,
        JSON.stringify(tarefas)
      );
    }
  } catch (err) {
    new Error(err.message);
  }
};

const updateById = ({ id, titulo, description, status }: ITarefasData) => {
  try {
    const tarefasData = getAll();
    const tarefas = tarefasData?.tarefas;
    if (tarefas) {
      const searchTarefa = tarefas.find((o) => o.id === id);
      if (searchTarefa) {
        const indexTarefa = tarefas.indexOf(searchTarefa);
        tarefas[indexTarefa] = {
          id: id,
          titulo: titulo,
          description: description,
          status: status,
        };

        localStorage.setItem(
          EnvironmentViriables.LIST_NAME,
          JSON.stringify(tarefas)
        );
      }
    }
  } catch (err) {
    new Error(err.message);
  }
};

const deleteById = (id: number) => {
  try {
    const tarefasData = getAll();
    const tarefas = tarefasData?.tarefas;
    if (tarefas) {
      const searchTarefa = tarefas.find((o) => o.id === id);
      if (searchTarefa) {
        const indexTarefa = tarefas.indexOf(searchTarefa);
        if (searchTarefa) {
          const indexTarefa = tarefas.indexOf(searchTarefa);
          tarefas.splice(indexTarefa, 1);

          localStorage.setItem(
            EnvironmentViriables.LIST_NAME,
            JSON.stringify(tarefas)
          );
        }
      }
    }
  } catch (err) {
    new Error(err.message);
  }
};

export const TarefasServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
