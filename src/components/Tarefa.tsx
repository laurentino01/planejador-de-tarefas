import React, { useEffect, useState } from "react";
import { ITarefaProps } from "../interfaces/ITarefaProps";
import { Edit, Delete, Visibility } from "@mui/icons-material";
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
  title,
  description,
  completed,
  openModal,
  setTargetTarefa,
}: ITarefaProps) => {
  const [status, setStatus] = useState(completed);

  useEffect(() => {
    setTargetTarefa({
      id: id,
      title: title,
      description: description,
      completed: completed,
    });
  }, []);

  return (
    <TableRow>
      <TableCell>
        <Typography component={"h6"} variant="h6">
          {title}
        </Typography>
      </TableCell>
      <TableCell>
        <div className="checkContainer">
          <Checkbox
            checked={status}
            onChange={(e) => {
              setTargetTarefa({
                id: id,
                title: title,
                description: description,
                completed: e.target.checked,
              });
              setStatus(e.target.checked);
            }}
          />
        </div>
      </TableCell>

      <TableCell>
        <List component={Box} display={"flex"}>
          <ListItem
            onClick={() => openModal(id, title, description, status, "exclude")}
            sx={{ cursor: "pointer" }}
            component={"li"}
          >
            <Delete></Delete>
          </ListItem>
          <ListItem
            onClick={() => openModal(id, title, description, status, "edit")}
            sx={{ cursor: "pointer" }}
            component={"li"}
          >
            <Edit></Edit>
          </ListItem>

          {/* <ListItem
            onClick={() => openModal(id, title, description, status, "view")}
            sx={{ cursor: "pointer" }}
            component={"li"}
          >
            <Visibility></Visibility>
          </ListItem> */}
        </List>
      </TableCell>
    </TableRow>
  );
};
