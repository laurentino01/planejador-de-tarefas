import React, { useEffect, useState } from "react";
import { ITarefaProps } from "../interfaces/ITarefaProps";
import { Edit, Delete, Visibility } from "@mui/icons-material";

export const Tarefa = ({
  id,
  title,
  description,
  completed,
  openModal,
  setTargetTarefa,
}: ITarefaProps) => {
  const [status, setStatus] = useState(completed);

  useEffect(() => {
    setTargetTarefa({
      id: id,
      title: title,
      description: description,
      completed: completed,
    });
  }, []);

  return (
    <tr>
      <td>
        <h6>{title}</h6>
      </td>
      <td>
        <div className="checkContainer">
          <input
            id="check"
            type="checkbox"
            onChange={(e) => {
              setTargetTarefa({
                id: id,
                title: title,
                description: description,
                completed: e.target.checked,
              });
              setStatus(e.target.checked);
            }}
            checked={status}
          />
          <span className="checkmark"></span>
        </div>
      </td>

      <td>
        <ul>
          <li
            onClick={() => openModal(id, title, description, status, "exclude")}
          >
            <Delete></Delete>
          </li>
          <li onClick={() => openModal(id, title, description, status, "edit")}>
            <Edit></Edit>
          </li>

          <li onClick={() => openModal(id, title, description, status, "view")}>
            <Visibility></Visibility>
          </li>
        </ul>
      </td>
    </tr>
  );
};
