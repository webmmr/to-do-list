/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Task from "./Task";

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <>
      <ul className="tasklist">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
