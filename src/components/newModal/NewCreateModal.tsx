import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Modal,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

import {
  IListaTarefasData,
  TarefasServices,
} from "../../services/tarefasServices/TarefasServices";

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

interface IFormProps {
  titulo: string;
  description: string;
}

export interface INewCreateModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const NewCreateModal = ({
  isOpen,
  handleClose,
}: INewCreateModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({ defaultValues: { titulo: "", description: "" } });

  const onSubmit = useCallback(
    (data: IFormProps) => {
      const title = data.titulo;
      const description = data.description;
      TarefasServices.create(title, description);
      handleClose();
    },
    [handleClose]
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
            Criar Nova Tarefa
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
                label="Título"
                placeholder="Digite um título. "
                required
              />
            </Box>
            <Box>
              <TextField
                {...register("description", { required: true })}
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                placeholder="Digite uma descrição."
                required
              />
            </Box>
            <Button type="submit" variant="contained" disableElevation>
              Criar Tarefa
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};