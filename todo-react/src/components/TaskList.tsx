import { ITask } from "../@types/todo";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";

function TaskList() {
  const tasks = useContext(TaskContext)?.tasks;
  if (tasks && tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }
  return (
    <>
      {tasks?.map((task: ITask) => (
        <TaskCard key={task.id} id={task.id} />
      ))}
    </>
  );
}

export default TaskList;
