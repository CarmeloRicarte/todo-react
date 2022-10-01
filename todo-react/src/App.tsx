import "./App.css";
import TaskForm from "./components/task-form/TaskForm";
import TaskList from "./components/task-list/TaskList";
import { useEffect, useState } from "react";
import { tasks as data, Task } from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([] as Task[]);

  // cuando estan los datos cargados, los seteamos al state al iniciar
  useEffect(() => setTasks(data), []);

  function createTask(taskTitle: string): void {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "Nueva tarea",
      },
    ]);
  }
  return (
    <>
      <h1>TODO React</h1>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
