import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // add task function
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

//   const removeTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };


// removeTask function

const removeItem = (index)=>{
  tasks.splice(index, 1)
  setTasks([...tasks])
}


  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn btn-danger" onClick={() => removeItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
