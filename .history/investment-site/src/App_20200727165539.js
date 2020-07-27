import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserDashboard />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
