import React, { useState } from "react";
import { NewViewModal, NewCreateModal, NewEditModal } from "./index";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
import { NewDeleteModal } from "./NewDeleteModal";

interface INewModalControlProps {
  option: string;
  targetTarefa: IListaTarefasData;
  isOpen: boolean;
  handleClose: () => void;
  handleSnackOpen: () => void;
  handleAct: (act: string) => void;
}

interface IModalControlData {
  view: JSX.Element;
  create: JSX.Element;
  edit: JSX.Element;
  delete: JSX.Element;
}

export const NewModalControl = ({
  option,
  targetTarefa,
  isOpen,
  handleSnackOpen,
  handleClose,
  handleAct,
}: INewModalControlProps) => {
  const [modalControl, setModalControl] = useState<IModalControlData>({
    edit: (
      <NewEditModal
        handleSnackOpen={handleSnackOpen}
        targetTarefa={targetTarefa}
        isOpen={isOpen}
        handleClose={handleClose}
        handleAct={handleAct}
      />
    ),
    view: (
      <NewViewModal
        targetTarefa={targetTarefa}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    ),
    create: (
      <NewCreateModal
        isOpen={isOpen}
        handleClose={handleClose}
        handleAct={handleAct}
        handleSnackOpen={handleSnackOpen}
      />
    ),
    delete: (
      <NewDeleteModal
        handleSnackOpen={handleSnackOpen}
        isOpen={isOpen}
        handleClose={handleClose}
        targetTarefa={targetTarefa}
        handleAct={handleAct}
      />
    ),
  });
  return modalControl[option];
};
