import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { ListaDeTarefas } from "../pages";

export const AppRoutes = ({
  lista,
  isOpen,
  handleClose,
  handleOpen,
  modalOption,
  setModalOption,
}) => {
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
