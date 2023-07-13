import React, { useCallback } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

import { TarefasServices } from "../../services/tarefasServices/TarefasServices";
import { styleModal } from "./modal.style";

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
        <Box sx={styleModal}>
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
