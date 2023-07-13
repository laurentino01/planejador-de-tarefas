import { EnvironmentViriables } from "../../../environment/EnviromentVariables";
import { v4 as uuidv4 } from "uuid";

export interface IListaTarefasData {
  id: string;
  titulo: string;
  description: string;
  status: boolean;
}
export interface IListaData {
  tarefas: IListaTarefasData[];
  count: number;
}

const getAll = (): IListaData | undefined => {
  try {
    const result = localStorage.getItem(EnvironmentViriables.LIST_NAME);
    if (result) {
      const listaData: IListaData = JSON.parse(result);

      return listaData;
    }
  } catch (err) {
    new Error(err.message);
  }
};

const getById = (id: string) => {
  try {
    const tarefas = getAll()?.tarefas;

    const searchTarefa = tarefas?.find((o) => o.id === id);
    if (searchTarefa !== undefined) {
      return searchTarefa;
    }
  } catch (err) {
    new Error(err.message);
  }
};

const create = (titulo: string, description: string) => {
  try {
    if (!localStorage[EnvironmentViriables.LIST_NAME]) {
      const newListData: IListaData = {
        tarefas: [],
        count: 0,
      };
      localStorage.setItem(
        EnvironmentViriables.LIST_NAME,
        JSON.stringify(newListData)
      );
    }

    const tarefas = getAll()?.tarefas;

    if (tarefas) {
      const newTarefa: IListaTarefasData = {
        id: uuidv4(),
        titulo: titulo,
        description: description,
        status: false,
      };

      tarefas.push(newTarefa);

      const newListaData: IListaData = {
        tarefas: tarefas,
        count: tarefas.length,
      };

      localStorage.setItem(
        EnvironmentViriables.LIST_NAME,
        JSON.stringify(newListaData)
      );
    }
  } catch (err) {
    new Error(err.message);
  }
};

const updateById = (
  id: string,
  titulo: string,
  description: string,
  status: boolean
) => {
  try {
    const tarefas = getAll()?.tarefas;

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

        const newData: IListaData = {
          tarefas: tarefas,
          count: tarefas.length,
        };
        localStorage.setItem(
          EnvironmentViriables.LIST_NAME,
          JSON.stringify(newData)
        );
      }
    }
  } catch (err) {
    new Error(err.message);
  }
};

const deleteById = (id: string) => {
  try {
    const tarefas = getAll()?.tarefas;

    if (tarefas) {
      const searchTarefa = tarefas.find((o) => o.id === id);
      if (searchTarefa) {
        const indexTarefa = tarefas.indexOf(searchTarefa);
        const i = indexTarefa === 0 ? "zero" : indexTarefa;
        if (i) {
          tarefas.splice(indexTarefa, 1);
          const newData: IListaData = {
            tarefas: tarefas,
            count: tarefas.length,
          };
          localStorage.setItem(
            EnvironmentViriables.LIST_NAME,
            JSON.stringify(newData)
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
