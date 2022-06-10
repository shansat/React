import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? "dark-theme": ""}>

      <div className="content-bg-color main-content">
        <h1>Dark Mode is </h1>
        <input type="checkbox" onChange={() => setTheme(!theme)}/>
      </div>
    </div>
  );
}

export default App;
