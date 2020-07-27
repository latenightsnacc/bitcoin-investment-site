import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <UserDashboard />
      </div>
    </Router>
    
  );
}

export default App;
