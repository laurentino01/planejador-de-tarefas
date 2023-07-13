import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { ListaDeTarefas } from "../pages";

export const AppRoutes = ({ lista, isOpen, handleClose, handleOpen }) => {
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
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
