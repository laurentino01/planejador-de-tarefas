import { ITarefa } from "./ITarefa";

export interface ITarefaProps {
  id: string;
  titulo: string;
  description: string;
  status: boolean;
  openModal: (
    id: string,
    titulo: string,
    description: string,
    status: boolean,
    modal: string
  ) => void;
}
