import React from "react";
import { Box, Modal, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
import { styleModal } from "./modal.style";

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
            <Typography> {targetTarefa.description} </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                color: `${
                  targetTarefa.status ? theme.palette.primary.main : "red"
                }`,
              }}
            >
              {targetTarefa.status ? "Concluída!" : "Por fazer!"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
