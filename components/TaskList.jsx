// src/components/TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-item" style={{ margin: "20px" }}>
      <h3>Task List</h3>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task} - <strong>{task.priority}</strong>
            <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
