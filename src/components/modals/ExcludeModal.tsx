import React from "react";
import "../../sass/modal.scss";
import { Card, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ITarefaModuleProps } from "../../interfaces/ITarefaModuleProps";
import { TarefasServices } from "../../services/tarefasServices/TarefasServices";
export const ExcludeModal = ({
  closeModal,
  targetTarefa,
}: ITarefaModuleProps) => {
  const handleExclude = (id) => {
    TarefasServices.deleteById(id);
  };

  return (
    <div className="modal">
      <Card variant="outlined" className="card">
        <CloseIcon onClick={() => closeModal()}></CloseIcon>
        <h2>Deseja excluir esse item?</h2>
        <div className="card-body">
          <h2>{targetTarefa.title}</h2>

          <p>{targetTarefa.description}</p>
          <h2>Tarefa concluída? </h2>
          <p className={targetTarefa.completed ? "blue" : "red"}>
            {targetTarefa.completed ? "Sim" : "Não"}
          </p>
        </div>

        <form>
          <Button
            type="submit"
            onClick={() => closeModal()}
            variant="contained"
            disableElevation
          >
            Não
          </Button>

          <Button
            type="submit"
            onClick={() => handleExclude(targetTarefa.id)}
            variant="outlined"
          >
            Sim
          </Button>
        </form>
      </Card>
    </div>
  );
};
