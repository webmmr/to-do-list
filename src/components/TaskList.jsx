/* eslint-disable react/jsx-key */
import { useState } from "react";
import initialData from "../data";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState(initialData);

  const taskLeft = tasks.filter((task) => !task.status).length;

  function clearComplete() {
    setTasks(tasks.filter((task) => !task.status));
  }

  return (
    <>
      <ul className="tasklist">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
      <ul className="tasklist controller">
        <li>{taskLeft} tasks left</li>
        <li>
          <ul className="control">
            <li className="link active">All</li>
            <li className="link">Active</li>
            <li className="link">Completed</li>
          </ul>
        </li>
        <li onClick={clearComplete} className="link">
          Clear Completed
        </li>
      </ul>
    </>
  );
};

export default TaskList;
