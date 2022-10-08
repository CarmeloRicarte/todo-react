import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <h1>TODO React</h1>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
