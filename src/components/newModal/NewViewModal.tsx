import React from "react";
import { Box, Modal, SxProps, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
import { styleModal } from "./modal.style";

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
        <Box sx={{ display: "block", maxWidth: "100%" }}>
          <Typography
            sx={{ wordWrap: "break-word" }}
            component={"h2"}
            variant="h4"
          >
            {targetTarefa.titulo}
          </Typography>
        </Box>

        <Box sx={{ display: "block", maxWidth: "100%" }}>
          <Typography
            sx={{ wordWrap: "break-word" }}
            variant="body1"
            component={"p"}
          >
            {targetTarefa.description}
          </Typography>
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
    </Modal>
  );
};
