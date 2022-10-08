import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = useContext(TaskContext)?.createTask;

  /**
   * We're using the createTask function from the useTaskContext hook to create a new task.
   * The createTask function takes an object with a title and description property.
   * We're passing in the title and description from the state.
   * After we create the task, we're clearing the title and description from the state.
   * @param {any} e - any: The event object that is passed to the function.
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTask &&
      createTask({
        id: Math.random(),
        title,
        description,
      });
    // limpiamos los campos del form y state
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="taskInput"
        type="text"
        value={title}
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        placeholder="Descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TaskForm;
