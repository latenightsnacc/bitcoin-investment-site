import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import UserDashboard from './pages/UserDashboard'

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
