import { useEffect, useState } from "react";
import { tasks as data } from "./tasks";

function Tasklist() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "",
      description: "",
    },
  ]);

  // cuando estan los datos cargados, los seteamos al state al iniciar
  useEffect(() => setTasks(data), []);

  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasklist;
