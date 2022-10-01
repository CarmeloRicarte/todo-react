import { useState } from "react";
import { Task } from "../data/tasks";

interface TaskFormProps {
  createTask: (taskTitle: Task) => void;
}

function TaskForm({ createTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTask({
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
