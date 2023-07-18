import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";

import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="app">
        <div className="content">
          <Header />
          <AddTaskForm />
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
