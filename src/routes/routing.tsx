import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { ListaDeTarefas } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaDeTarefas />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
