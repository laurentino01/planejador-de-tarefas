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

export const Tarefa = ({
  id,
  titulo,
  description,
  status,
  openModal,
  setTargetTarefa,
}: ITarefaProps) => {
  const [check, setCheck] = useState(status);

  useEffect(() => {
    setTargetTarefa({
      id: id,
      titulo: titulo,
      description: description,
      status: status,
    });
  }, []);

  return (
    <TableRow>
      <TableCell>
        <Typography component={"h6"} variant="h6">
          {titulo}
        </Typography>
      </TableCell>
      <TableCell padding="none">
        <div className="checkContainer">
          <Checkbox
            checked={check}
            onChange={(e) => {
              setTargetTarefa({
                id: id,
                titulo: titulo,
                description: description,
                status: e.target.checked,
              });
              setCheck(e.target.checked);
            }}
          />
        </div>
      </TableCell>

      <TableCell padding="none">
        <List component={Box} display={"flex"}>
          <ListItem
            onClick={() =>
              openModal(id, titulo, description, status, "exclude")
            }
            sx={{ cursor: "pointer" }}
            component={"li"}
          >
            <Delete></Delete>
          </ListItem>
          <ListItem
            onClick={() => openModal(id, titulo, description, status, "edit")}
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
