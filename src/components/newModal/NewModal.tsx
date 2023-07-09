import React, { useState } from "react";
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

import { ITarefaModuleProps } from "../../interfaces/ITarefaModuleProps";
import { TarefasServices } from "../../services/tarefasServices/TarefasServices";

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

export const NewModal = ({ closeModal, targetTarefa }: ITarefaModuleProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IFormProps>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (data: IFormProps) => {
    const title = data.titulo;
    const description = data.description;
    TarefasServices.create({ title, description });
  };

  return (
    <>
      <Button onClick={handleOpen} sx={{ backgroundColor: "white" }}>
        Open modal
      </Button>
      <Modal
        open={open}
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

                /*  onChange={(e) => setTitle(e.target.value)} */
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
                /* onChange={(e) => setDescription(e.target.value)} */
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
