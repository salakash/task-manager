//Manages the state of the tasks (add, delete) and passes data to child components.
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./TaskManager.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-manager">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default TaskManager;
