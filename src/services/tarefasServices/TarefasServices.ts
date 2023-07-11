import { EnvironmentViriables } from "../../../environment/EnviromentVariables";

export interface IListaTarefasData {
  id: number;
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

const getById = (id: number) => {
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
        id: tarefas.length + 1,
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

const updateById = ({ id, titulo, description, status }: IListaTarefasData) => {
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
    const tarefas = getAll()?.tarefas;

    if (tarefas) {
      const searchTarefa = tarefas.find((o) => o.id === id);
      if (searchTarefa) {
        const indexTarefa = tarefas.indexOf(searchTarefa);
        if (indexTarefa) {
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
