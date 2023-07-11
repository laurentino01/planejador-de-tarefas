import { ITarefa } from "./ITarefa";

export interface ITarefaProps {
  id: string;

  openModal: (
    id: string,
    titulo: string,
    description: string,
    status: boolean,
    modal: string
  ) => void;
}
