import { Box, Button, Modal, SxProps, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { ITarefaModuleProps } from "../../interfaces/ITarefaModuleProps";
import { TarefasServices } from "../../services/tarefasServices/TarefasServices";

const style: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export const NewModal = ({ closeModal, targetTarefa }: ITarefaModuleProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (title, description) => {
    TarefasServices.create({ title, description });
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose}></CloseIcon>
          <h2>Criar Nova Tarefa</h2>

          <form onSubmit={() => handleCreate(title, description)}>
            <div>
              <TextField
                id="outlined-basic"
                label="Título"
                placeholder="Digite um título. "
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                placeholder="Digite uma descrição."
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button type="submit" variant="contained" disableElevation>
              Criar Tarefa
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
