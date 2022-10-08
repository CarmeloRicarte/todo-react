import { useContext } from "react";
import { ITask } from "../@types/todo";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ id }: { key: number; id: number }) {
  const deleteTask = useContext(TaskContext)?.deleteTask;
  const tasks = useContext(TaskContext)?.tasks;
  const task = tasks?.find((t: ITask) => t.id === id);
  if (task) {
    return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button onClick={() => deleteTask && deleteTask(task.id)}>
          Eliminar tarea
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default TaskCard;
