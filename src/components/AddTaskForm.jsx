import { useState } from "react";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    console.log(task);
    setTask("");
  }
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};

export default AddTaskForm;
