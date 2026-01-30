import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const API_URL = "http://localhost:5000/api/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!text) return;
    await axios.post(API_URL, { text });
    setText('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>DevOps Task Manager</h2>
      <form onSubmit={addTask}>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Naya task likho..." 
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task._id} style={{ marginTop: '10px' }}>
            {task.text} 
            <button onClick={() => deleteTask(task._id)} style={{ marginLeft: '10px', color: 'red' }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
