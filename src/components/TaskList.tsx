import { ITask } from "../@types/todo";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";

function TaskList() {
  const tasks = useContext(TaskContext)?.tasks;
  if (tasks && tasks.length === 0) {
    return (
      <h1 className=" text-white text-4xl font-bold text-center">
        No hay tareas aún
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks?.map((task: ITask) => (
        <TaskCard key={task.id} id={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
