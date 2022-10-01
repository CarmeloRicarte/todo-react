import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { tasks as data, Task } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState([] as Task[]);

  // cuando estan los datos cargados, los seteamos al state al iniciar
  useEffect(() => setTasks(data), []);

  function createTask(task: Task): void {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
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
