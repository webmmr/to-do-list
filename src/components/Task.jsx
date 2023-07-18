/* eslint-disable react/prop-types */
import cross from "../assets/icon-cross.svg";

const Task = ({ task }) => {
  return (
    <li className="task">
      <span className="radio"></span>
      <p className={task.status ? "complete" : ""}>{task.task}</p>
      <span className="delete">
        <img src={cross} alt="Delete" />
      </span>
    </li>
  );
};

export default Task;
