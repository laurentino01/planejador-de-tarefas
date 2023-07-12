import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Modal,
  SxProps,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

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

interface IFormEditProps {
  id: string;
  titulo: string;
  description: string;
  status: string;
}

export const NewEditModal = ({
  isOpen,
  handleClose,
  id,
}: {
  isOpen: boolean;
  handleClose: () => void;
  id: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEditProps>({
    defaultValues: { titulo: "", description: "" },
  });
  const tarefaById = useHandleTarefas().handleTarefaById(id);
  const handleUpdateById = useHandleTarefas().handleUpdateById;

  const onSubmit = useCallback(
    (data: IFormEditProps) => {
      if (tarefaById) {
        const id = tarefaById?.id;
        const titulo = data.titulo;
        const description = data.description;
        const status = tarefaById?.status;
        handleUpdateById(id, titulo, description, status);
      }

      handleClose();
    },
    [handleClose, tarefaById]
  );

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ alignSelf: "end", fontSize: "32px", cursor: "pointer" }}
            onClick={handleClose}
          ></CloseIcon>
          <Typography component={"h2"} variant="h4">
            Editar Tarefa
          </Typography>

          <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Box>
              <TextField
                {...register("titulo", { required: true })}
                id="outlined-basic"
                label={`${tarefaById?.titulo}`}
                placeholder="Digite um novo título. "
                required
              />
            </Box>
            <Box>
              <TextField
                {...register("description", { required: true })}
                id="outlined-multiline-static"
                label="Nova Descrição"
                multiline
                rows={4}
                placeholder={`${tarefaById?.description}`}
                required
              />
            </Box>
            <Button type="submit" variant="contained" disableElevation>
              Editar Tarefa
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
