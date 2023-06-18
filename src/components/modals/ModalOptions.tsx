import React, { useEffect, useState } from "react";
import { EditModal } from "./EditModal";
import { ExcludeModal } from "./ExcludeModal";
import { ViewModal } from "./ViewModal";
import { CreateModal } from "./CreateModal";

interface IModalOpt {
  create: JSX.Element;
  edit: JSX.Element;
  exclude: JSX.Element;
  view: JSX.Element;
}
export const ModalOptions = ({
  option,
  idTarefa,
  closeModal,
  targetTarefa,
}) => {
  const [modalOpt, setModalOpt] = useState<IModalOpt>({
    create: <CreateModal closeModal={closeModal} targetTarefa={targetTarefa} />,
    edit: <EditModal closeModal={closeModal} targetTarefa={targetTarefa} />,
    exclude: (
      <ExcludeModal closeModal={closeModal} targetTarefa={targetTarefa} />
    ),
    view: <ViewModal closeModal={closeModal} targetTarefa={targetTarefa} />,
  });

  return modalOpt[option];
};
