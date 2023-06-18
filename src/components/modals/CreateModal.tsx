import React, { useState } from "react";
import "../../sass/modal.scss";
import { Card, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ITarefaModuleProps } from "../../interfaces/ITarefaModuleProps";
import { TarefasServices } from "../../services/tarefasServices/TarefasServices";

export const CreateModal = ({
  closeModal,
  targetTarefa,
}: ITarefaModuleProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (title, description) => {
    TarefasServices.create({ title, description });
  };

  return (
    <div className="modal">
      <Card variant="outlined" className="card">
        <CloseIcon onClick={() => closeModal()}></CloseIcon>
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
      </Card>
    </div>
  );
};
