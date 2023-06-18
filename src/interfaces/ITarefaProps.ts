import { ITarefa } from "./ITarefa";

export interface ITarefaProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  openModal: (
    id: number,
    title: string,
    description: string,
    completed: boolean,
    modal: string
  ) => void;
  setTargetTarefa: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      description: string;
      completed: boolean;
    }>
  >;
}
