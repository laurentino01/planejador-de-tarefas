import React from "react";
import { Box, Modal, SxProps, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useHandleTarefas } from "../../hooks/useHandleTarefas";

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

export const NewViewModal = ({
  isOpen,
  handleClose,
  id,
}: {
  isOpen: boolean;
  handleClose: () => void;
  id: string;
}) => {
  const tarefaById = useHandleTarefas().handleTarefaById(id);
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
          {tarefaById?.titulo}
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
            <Typography> {tarefaById?.description} </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography
              sx={{
                color: `${
                  tarefaById?.status ? theme.palette.primary.main : "red"
                }`,
              }}
            >
              {tarefaById?.status ? "Concluída!" : "Por fazer!"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
