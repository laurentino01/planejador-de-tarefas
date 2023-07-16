import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { ListaDeTarefas } from "../pages";
import { IListaTarefasData } from "../services/tarefasServices/TarefasServices";

interface IAppRoutesProps {
  lista: IListaTarefasData[];
  isOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  modalOption: string;
  setModalOption: React.Dispatch<React.SetStateAction<string>>;
}

export const AppRoutes = ({
  lista,
  isOpen,
  handleClose,
  handleOpen,
  modalOption,
  setModalOption,
}: IAppRoutesProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ListaDeTarefas
            handleOpen={handleOpen}
            handleClose={handleClose}
            isOpen={isOpen}
            lista={lista}
            modalOption={modalOption}
            setModalOption={setModalOption}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
