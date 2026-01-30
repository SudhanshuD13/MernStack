
import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => setMsg(data.status))
      .catch(err => setMsg("Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>DevOps Project: MERN Stack</h1>
      <p>Backend Status: <strong>{msg}</strong></p>
    </div>
  );
}

export default App;
