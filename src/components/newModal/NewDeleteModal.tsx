import React, { useState } from "react";
import { Box, Modal, Typography, useTheme, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  IListaTarefasData,
  TarefasServices,
} from "../../services/tarefasServices/TarefasServices";
import { styleModal } from "./modal.style";
import { useHandleTarefas } from "../../hooks/useHandleTarefas";
interface INewDeleteModalProps {
  isOpen: boolean;
  handleClose: () => void;
  targetTarefa: IListaTarefasData;
}

export const NewDeleteModal = ({
  isOpen,
  handleClose,
  targetTarefa,
}: INewDeleteModalProps) => {
  const theme = useTheme();

  const [message, setMessage] = useState({
    negative: "Você ainda não completou essa tarefa, vai desistir?",
    positive: "Está tarefa está concluída, parabéns! Quer realmente excluir? ",
  });

  const handleDelete = (id: string) => {
    TarefasServices.deleteById(id);
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>
        <CloseIcon
          sx={{
            alignSelf: "end",
            fontSize: "32px",
            cursor: "pointer",
            color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
          }}
          onClick={handleClose}
        ></CloseIcon>
        <Typography component={"h2"} variant="h4">
          {targetTarefa.titulo}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: `${
                  targetTarefa.status ? theme.palette.primary.main : "red"
                }`,
                textAlign: "center",
              }}
            >
              {` ${targetTarefa.status ? message.positive : message.negative} `}
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Button
              onClick={() => handleDelete(targetTarefa.id)}
              variant={targetTarefa.status ? "contained" : "text"}
              sx={{ marginRight: "20px" }}
            >
              Sim
            </Button>
            <Button
              onClick={handleClose}
              variant={targetTarefa.status ? "text" : "contained"}
            >
              Não
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
