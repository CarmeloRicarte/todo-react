import { Task } from "../tasks";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  if (tasks && tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }
  return (
    <div>
      {tasks.map((task: Task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
