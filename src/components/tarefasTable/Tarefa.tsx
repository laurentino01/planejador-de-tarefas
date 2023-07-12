import React, { useEffect, useState } from "react";
import { ITarefaProps } from "../../interfaces/ITarefaProps";
import { Edit, Delete } from "@mui/icons-material";
import {
  List,
  ListItem,
  TableCell,
  TableRow,
  Typography,
  Checkbox,
  Box,
  IconButton,
} from "@mui/material";
import { useHandleTarefas } from "../../hooks/useHandleTarefas";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
import { NewViewModal } from "../newModal/NewViewModal";
import { NewEditModal } from "../newModal/NewEditModal";

export const Tarefa = ({
  id,
  titulo,
  description,
  status,
  openModal,
}: ITarefaProps) => {
  const [check, setCheck] = useState(status);
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdateById = useHandleTarefas().handleUpdateById;

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      {/* <NewViewModal isOpen={isOpen} handleClose={handleClose} id={id} /> */}
      <NewEditModal isOpen={isOpen} handleClose={handleClose} id={id} />
      <TableRow>
        <TableCell>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={handleOpen}
            component={"h6"}
            variant="h6"
          >
            {titulo}
          </Typography>
        </TableCell>
        <TableCell padding="none">
          <div className="checkContainer">
            <Checkbox
              checked={check}
              onChange={(e) => {
                handleUpdateById(id, titulo, description, e.target.checked),
                  setCheck(e.target.checked);
              }}
            />
          </div>
        </TableCell>

        <TableCell padding="none">
          <Box component={Box} display={"flex"}>
            <IconButton
              onClick={() =>
                openModal(id, titulo, description, status, "exclude")
              }
              sx={{ cursor: "pointer" }}
              component={"li"}
            >
              <Delete></Delete>
            </IconButton>
            <IconButton
              onClick={handleOpen}
              sx={{ cursor: "pointer" }}
              component={"li"}
            >
              <Edit></Edit>
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
};
