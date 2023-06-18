import React from "react";
import "../../sass/modal.scss";
import { Card } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ITarefaModuleProps } from "../../interfaces/ITarefaModuleProps";

export const ViewModal = ({ closeModal, targetTarefa }: ITarefaModuleProps) => {
  return (
    <div className="modal">
      <Card variant="outlined" className="card">
        <CloseIcon onClick={() => closeModal()}></CloseIcon>
        <div className="card-body">
          <h2>{targetTarefa.title}</h2>

          <p>{targetTarefa.description}</p>
          <h2>Tarefa concluída? </h2>
          <p className={targetTarefa.completed ? "blue" : "red"}>
            {targetTarefa.completed ? "Sim" : "Não"}
          </p>
        </div>
      </Card>
    </div>
  );
};
