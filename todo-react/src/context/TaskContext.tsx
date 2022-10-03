import { createContext } from "react";

export const TaskContext = createContext(20); // almacena los datos

/**
 *
 * @param props react props
 * @returns component that contains another component inside
 */
export const TaskContextProvider = (props: any) => {
  let x = 20;
  // pasamos el valor de x para poder usarlo en otros componentes
  return (
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
};
