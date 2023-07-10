import React, { useEffect, useState, useCallback } from "react";
import { TarefasServices } from "../services/tarefasServices/TarefasServices";
import { Tarefa, ModalOptions } from "../components";
import { Add } from "@mui/icons-material";
import { ITarefa } from "../interfaces/ITarefa";
/* import "../sass/tasks-area.scss"; */
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableFooter,
  TablePagination,
} from "@mui/material";

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
  const [page, setPage] = useState(1);

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

  const handlePageChange = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

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
        marginTop={10}
        textAlign={"center"}
        variant="h4"
        component={"h1"}
      >
        Lista de Tarefas
      </Typography>

      <TableContainer
        component={Box}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={10}
      >
        <Table
          component={Paper}
          variant="elevation"
          sx={{
            maxWidth: 900,
            minWidth: 425,
            marginX: 10,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Tarefa</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Opções</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
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
            <TableRow>
              <TableCell>Nova tarefa... </TableCell>

              <TableCell>
                <Button
                  onClick={() =>
                    openModal(0, "string", "string", false, "create")
                  }
                >
                  <Add></Add>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={lista.length}
                onPageChange={handlePageChange}
                rowsPerPage={1}
                page={page}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </main>
  );
};
