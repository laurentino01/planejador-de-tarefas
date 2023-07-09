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

export const NewModal = ({ closeModal, targetTarefa }: ITarefaModuleProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = (data) => console.log(getValues());

  /* const handleCreate = (title, description) => {
    TarefasServices.create({ title, description });
  }; */

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
                {...(register("titulo"), { require: true })}
                id="outlined-basic"
                label="Título"
                placeholder="Digite um título. "
                required

                /*  onChange={(e) => setTitle(e.target.value)} */
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </Box>
            <Box>
              <TextField
                {...(register("description"), { require: true })}
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                placeholder="Digite uma descrição."
                required
                /* onChange={(e) => setDescription(e.target.value)} */
              />
              {errors.exampleRequired && <span>This field is required</span>}
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
