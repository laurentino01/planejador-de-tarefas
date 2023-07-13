import React from "react";
import { Box, Modal, SxProps, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useHandleTarefas } from "../../hooks/useHandleTarefas";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";

const style: SxProps = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: " 90%",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

interface INewViewModalProps {
  isOpen: boolean;
  handleClose: () => void;
  targetTarefa: IListaTarefasData;
}

export const NewViewModal = ({
  isOpen,
  handleClose,
  targetTarefa,
}: INewViewModalProps) => {
  const theme = useTheme();

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
