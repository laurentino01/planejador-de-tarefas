import React, { useState } from "react";
import { Edit, Delete } from "@mui/icons-material";
import {
  TableCell,
  TableRow,
  Typography,
  Checkbox,
  Box,
  IconButton,
} from "@mui/material";
import { useHandleTarefas } from "../../hooks/useHandleTarefas";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
interface ITarefaProps {
  id: string;
  titulo: string;
  description: string;
  status: boolean;
  setTargetTarefa: React.Dispatch<React.SetStateAction<IListaTarefasData>>;
  setModalOption: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  handleOpen: () => void;
}

export const Tarefa = ({
  id,
  titulo,
  description,
  status,
  setTargetTarefa,
  setModalOption,
  handleOpen,
}: ITarefaProps) => {
  const [check, setCheck] = useState(status);

  const handleUpdateById = useHandleTarefas().handleUpdateById;

  const handleModal = (option: string) => {
    setModalOption(option);
    handleOpen();
    setTargetTarefa({
      id: id,
      titulo: titulo,
      description: description,
      status: check,
    });
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => handleModal("view")}
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
              onClick={() => handleModal("delete")}
              sx={{ cursor: "pointer" }}
              component={"li"}
            >
              <Delete></Delete>
            </IconButton>
            <IconButton
              onClick={() => handleModal("edit")}
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
