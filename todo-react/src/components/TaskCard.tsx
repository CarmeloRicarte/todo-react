import { Task } from "../data/tasks";

interface TaskCardProps {
  task: Task;
  deleteTask: (taskId: number | undefined) => void;
}

function TaskCard({ task, deleteTask }: TaskCardProps) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
