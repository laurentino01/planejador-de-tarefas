import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routing";
import "./global.scss";
import { db } from "./services/db/db";

if (localStorage.length === 0) {
  localStorage.setItem("db", JSON.stringify(db));
}

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
