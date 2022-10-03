import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { tasks as data, Task } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState([] as Task[]);

  // cuando estan los datos cargados, los seteamos al state al iniciar
  useEffect(() => setTasks(data), []);

  /**
   * We're taking in a task object, and then we're adding that task object to the tasks array
   * @param {Task} task - Task - this is the type of the parameter that we're passing in.
   */
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

  /**
   * If the taskId is not undefined, then filter the tasks array and return all tasks that do not have
   * an id that matches the taskId.
   * @param {number | undefined} taskId - number | undefined
   */
  function deleteTask(taskId: number | undefined): void {
    setTasks(tasks.filter((t: Task) => t.id !== taskId));
  }

  return (
    <>
      <h1>TODO React</h1>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
