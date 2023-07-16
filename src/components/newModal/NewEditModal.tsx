import React, { useCallback, useState } from "react";
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

import { useHandleTarefas } from "../../hooks/useHandleTarefas";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
import { styleModal } from "./modal.style";

interface IFormEditProps {
  id: string;
  titulo: string;
  description: string;
  status: string;
}

interface INewEditModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSnackOpen: () => void;
  handleAct: (act: string) => void;
  targetTarefa: IListaTarefasData;
}

export const NewEditModal = ({
  isOpen,
  handleClose,
  targetTarefa,
  handleSnackOpen,
  handleAct,
}: INewEditModalProps) => {
  const [tituloCounter, setTituloCounter] = useState(0);
  const [descriptionCounter, setDescriptionCounter] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEditProps>({
    defaultValues: { titulo: "", description: "" },
  });

  const { handleUpdateById } = useHandleTarefas();
  const theme = useTheme();

  const onSubmit = useCallback(
    (data: IFormEditProps) => {
      handleUpdateById(
        targetTarefa.id,
        data.titulo,
        data.description,
        targetTarefa.status
      );
      handleAct("Editado");
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="caption"
                sx={{
                  color: `${
                    tituloCounter > 20 || tituloCounter < 3 ? "red" : "green"
                  }`,
                }}
              >
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
                label={`${targetTarefa.titulo}`}
                placeholder="Digite um novo título. "
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
                label="Nova Descrição"
                multiline
                rows={4}
                placeholder={`${targetTarefa.description}`}
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
              Editar Tarefa
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
