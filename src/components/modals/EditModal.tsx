import React, { useState } from "react";
import "../../sass/modal.scss";
import { Card, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ITarefaModuleProps } from "../../interfaces/ITarefaModuleProps";
import { TarefasServices } from "../../services/tarefasServices/TarefasServices";

export const EditModal = ({ closeModal, targetTarefa }: ITarefaModuleProps) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleUpdate = (id, title, description, completed) => {
    return TarefasServices.updateById(id, title, description, completed);
  };

  return (
    <div className="modal">
      <Card variant="outlined" className="card">
        <CloseIcon onClick={() => closeModal()}></CloseIcon>
        <h2>Deseja editar esse item?</h2>

        <form>
          <div>
            <TextField
              id="outlined-basic"
              label={targetTarefa.title}
              placeholder="Digite um novo título. "
              required
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Digite uma nova descrição."
              multiline
              rows={3}
              placeholder={targetTarefa.description}
              required
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <Button
            onClick={() => closeModal()}
            type="submit"
            variant="contained"
            disableElevation
          >
            Não
          </Button>
          <Button
            onClick={() =>
              handleUpdate(
                targetTarefa.id,
                newTitle,
                newDescription,
                targetTarefa.completed
              )
            }
            type="submit"
            variant="outlined"
            disableElevation
          >
            Sim
          </Button>
        </form>
      </Card>
    </div>
  );
};
