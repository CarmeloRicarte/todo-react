import TaskCard from "./TaskCard";
import { Task } from "../data/tasks";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (taskId: number | undefined) => void;
}

function TaskList({ tasks, deleteTask }: TaskListProps) {
  if (tasks && tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }
  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
