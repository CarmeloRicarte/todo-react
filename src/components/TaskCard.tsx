import { useContext } from "react";
import { ITask } from "../@types/todo";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ id }: { key: number; id: number }) {
  const deleteTask = useContext(TaskContext)?.deleteTask;
  const tasks = useContext(TaskContext)?.tasks;
  const task = tasks?.find((t: ITask) => t.id === id);
  if (task) {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h2 className="text-xl font-bold capitalize">{task.title}</h2>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button
          className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
          onClick={() => deleteTask && deleteTask(task.id)}
        >
          Eliminar tarea
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default TaskCard;
