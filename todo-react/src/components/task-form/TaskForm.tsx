import { useState } from "react";

interface TaskFormProps {
  createTask: (taskTitle: string) => void;
}

function TaskForm({ createTask }: TaskFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTask(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="taskInput"
        type="text"
        value={title}
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TaskForm;
