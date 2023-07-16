import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
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
  handleAct: (act: string) => void;
  handleSnackOpen: () => void;
}

export const NewCreateModal = ({
  isOpen,
  handleClose,
  handleAct,
  handleSnackOpen,
}: INewCreateModalProps) => {
  const [tituloCounter, setTituloCounter] = useState(0);
  const [descriptionCounter, setDescriptionCounter] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({ defaultValues: { titulo: "", description: "" } });
  const theme = useTheme();

  const onSubmit = useCallback(
    (data: IFormProps) => {
      const title = data.titulo;
      const description = data.description;
      TarefasServices.create(title, description);
      handleAct("Criado");
      handleSnackOpen();
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
            sx={{
              alignSelf: "end",
              fontSize: "32px",
              cursor: "pointer",
              color: theme.palette.mode === "dark" ? "white" : "black",
            }}
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="caption"
                sx={{
                  color: `${
                    tituloCounter > 20 || tituloCounter < 3 ? "red" : "green"
                  }`,
                }}
              >
                {" "}
                Caracteres: {tituloCounter}/20
              </Typography>
              <TextField
                {...register("titulo", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                  onChange: (e) => setTituloCounter(e.target.value.length),
                })}
                id="outlined-basic"
                label="Título"
                placeholder="Digite um título. "
                required
              />
              {errors.titulo && (
                <Typography variant="caption" sx={{ color: "red" }}>
                  {" "}
                  O máximo de caracteres é 20
                </Typography>
              )}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="caption"
                sx={{
                  color: `${
                    descriptionCounter > 100 || descriptionCounter < 6
                      ? "red"
                      : "green"
                  }`,
                }}
              >
                {" "}
                Caracteres: {descriptionCounter}/100
              </Typography>
              <TextField
                {...register("description", {
                  required: true,
                  minLength: 6,
                  maxLength: 100,
                  onChange: (e) => setDescriptionCounter(e.target.value.length),
                })}
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                placeholder="Digite uma descrição."
                required
              />
              {errors.description && (
                <Typography variant="caption" sx={{ color: "red" }}>
                  {" "}
                  O máximo de caracteres é 100
                </Typography>
              )}
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
