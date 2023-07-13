import React, { useState } from "react";
import { NewViewModal, NewCreateModal, NewEditModal } from "./index";
import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
import { NewDeleteModal } from "./NewDeleteModal";

interface INewModalControlProps {
  option: string;
  targetTarefa: IListaTarefasData;
  isOpen: boolean;
  handleClose: () => void;
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
  handleClose,
}: INewModalControlProps) => {
  const [modalControl, setModalControl] = useState<IModalControlData>({
    edit: (
      <NewEditModal
        targetTarefa={targetTarefa}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    ),
    view: (
      <NewViewModal
        targetTarefa={targetTarefa}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    ),
    create: <NewCreateModal isOpen={isOpen} handleClose={handleClose} />,
    delete: (
      <NewDeleteModal
        isOpen={isOpen}
        handleClose={handleClose}
        targetTarefa={targetTarefa}
      />
    ),
  });
  return modalControl[option];
};
