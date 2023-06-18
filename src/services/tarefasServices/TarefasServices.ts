import { createId } from "../../functions/createId";

import { db } from "../db/db";

const localDB = localStorage.getItem("db");
if (localDB === null) {
  localStorage.setItem("db", JSON.stringify(db));
}

const parseLocalDB = () => {
  if (localDB) {
    const db: Array<any> = JSON.parse(localDB);
    if (db !== undefined) {
      return db;
    }
  }
};

const getAll = () => {
  return parseLocalDB();
};

const getById = (id: number) => {
  const db = parseLocalDB();
  if (db === undefined) {
    return;
  }

  const searchTarefa = db.find((o) => o.id === id);

  if (searchTarefa !== undefined) {
    return searchTarefa;
  }
};
const create = ({ title, description }) => {
  const db = parseLocalDB();
  if (db === undefined) {
    return;
  }

  const id = createId(db);
  const tarefa = {
    id: id,
    title: title,
    description: description,
    completed: false,
  };
  db.push(tarefa);

  localStorage.setItem("db", JSON.stringify(db));
};

const updateById = (
  id: number,
  title: string,
  description: string,
  completed: boolean
) => {
  const db = parseLocalDB();
  if (db === undefined) {
    return;
  }
  const searchTarefa = db.find((o) => o.id === id);

  if (searchTarefa) {
    const indexTarefa = db.indexOf(searchTarefa);
    db[indexTarefa] = {
      id: id,
      title: title,
      description: description,
      completed: completed,
    };

    localStorage.setItem("db", JSON.stringify(db));
  }
};
const deleteById = (id: number) => {
  const db = parseLocalDB();
  if (db === undefined) {
    return;
  }

  const searchTarefa = db.find((o) => o.id === id);

  if (searchTarefa) {
    const indexTarefa = db.indexOf(searchTarefa);
    db.splice(indexTarefa, 1);

    localStorage.setItem("db", JSON.stringify(db));
  }
};

export const TarefasServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
