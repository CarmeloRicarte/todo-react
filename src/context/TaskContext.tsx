import { createContext, useEffect, useId, useState } from "react";
import { ITask, TodoContextType } from "../@types/todo";
import { tasks as data } from "../data/tasks";

export const TaskContext: React.Context<TodoContextType | null> = createContext(
  null as any
); // almacena los datos

/**
 *
 * @param props react props
 * @returns component that contains another component inside
 */
export const TaskContextProvider = (props: any) => {
  const [tasks, setTasks] = useState([] as ITask[]);

  // cuando estan los datos cargados, los seteamos al state al iniciar
  useEffect(() => setTasks(data), []);

  /**
   * We're taking in a task object, and then we're adding that task object to the tasks array
   * @param {ITask} task - ITask - this is the type of the parameter that we're passing in.
   */
  function createTask(task: ITask): void {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: Math.random(),
        description: task.description,
      },
    ]);
  }

  /**
   * If the taskId is not undefined, then filter the tasks array and return all tasks that do not have
   * an id that matches the taskId.
   * @param {number | undefined} taskId - number
   */
  function deleteTask(taskId: number): void {
    setTasks(tasks.filter((t: ITask) => t.id !== taskId));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
