// @types.todo.ts
export interface ITask {
  title: string;
  description: string;
  id: number;
}

export type TodoContextType = {
  tasks: ITask[];
  createTask: (task: ITask) => void;
  deleteTask: (taskId: number) => void;
};
