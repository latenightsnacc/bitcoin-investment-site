import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
// import { Router, Route, Switch } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import Invest from './pages/Invest'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Menu />
        <UserDashboard />
      </div>

    
  );
}

export default App;
