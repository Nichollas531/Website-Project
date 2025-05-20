import React, { useState } from "react";

function ToDoList() {
  const [tasks, useTasks] = useState(["eat breakfest", "take shower", "code"]);
  const [newTask, useNewTask] = useState("");

  function handleImputChange(event) {
    useNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      useTasks((t) => [...t, newTask]);
      useNewTask("");
    }
  }
  function deletask(index) {
    const filtered = tasks.filter((_, i) => i !== index);
    useTasks(filtered);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      useTasks(updateTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      useTasks(updateTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleImputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deletask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
