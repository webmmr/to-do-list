/* eslint-disable react/prop-types */
const Controller = ({ tasks, onClearComplete }) => {
  const taskLeft = tasks.filter((task) => !task.status).length;

  return (
    <div>
      <ul className="tasklist controller">
        <li>{taskLeft} tasks left</li>
        <li>
          <ul className="control">
            <li className="link active">All</li>
            <li className="link">Active</li>
            <li className="link">Completed</li>
          </ul>
        </li>
        <li onClick={onClearComplete} className="link">
          Clear Completed
        </li>
      </ul>
    </div>
  );
};

export default Controller;
