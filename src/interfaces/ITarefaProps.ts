import { IListaTarefasData } from "../services/tarefasServices/TarefasServices";
import { ITarefa } from "./ITarefa";

export interface ITarefaProps {
  id: string;
  titulo: string;
  description: string;
  status: boolean;
  setTargetTarefa: React.Dispatch<React.SetStateAction<IListaTarefasData>>;
  setModalOption: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  handleOpen: () => void;
}
