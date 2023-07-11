import React, { useEffect, useState } from "react";
import { ITarefaProps } from "../interfaces/ITarefaProps";
import { Edit, Delete } from "@mui/icons-material";
import {
  List,
  ListItem,
  TableCell,
  TableRow,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";
import { useHandleTarefas } from "../hooks/useHandleTarefas";
import { IListaTarefasData } from "../services/tarefasServices/TarefasServices";

export const Tarefa = ({ id, openModal }: ITarefaProps) => {
  const [tarefa, setTarefa] = useState({} as IListaTarefasData);
  const [check, setCheck] = useState(tarefa.status);
  const tarefaById = useHandleTarefas().handleTarefaById(id);
  const handleUpdateById = useHandleTarefas().handleUpdateById;

  useEffect(() => {
    if (tarefaById) {
      setTarefa(tarefaById);
    }
  }, []);

  return (
    <TableRow>
      <TableCell>
        <Typography component={"h6"} variant="h6">
          {tarefa.titulo}
        </Typography>
      </TableCell>
      <TableCell padding="none">
        <div className="checkContainer">
          <Checkbox
            checked={check}
            onChange={(e) => {
              handleUpdateById(
                tarefa.id,
                tarefa.titulo,
                tarefa.description,
                e.target.checked
              ),
                setCheck(e.target.checked);
            }}
          />
        </div>
      </TableCell>

      <TableCell padding="none">
        <List component={Box} display={"flex"}>
          <ListItem
            onClick={() =>
              openModal(
                id,
                tarefa.titulo,
                tarefa.description,
                tarefa.status,
                "exclude"
              )
            }
            sx={{ cursor: "pointer" }}
            component={"li"}
          >
            <Delete></Delete>
          </ListItem>
          <ListItem
            onClick={() =>
              openModal(
                id,
                tarefa.titulo,
                tarefa.description,
                tarefa.status,
                "edit"
              )
            }
            sx={{ cursor: "pointer" }}
            component={"li"}
          >
            <Edit></Edit>
          </ListItem>
        </List>
      </TableCell>
    </TableRow>
  );
};
