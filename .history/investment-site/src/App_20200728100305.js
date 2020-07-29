import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import UserDashboard from './pages/UserDashboard'
import Login from './pages/Login'
function App() {
  return (
      <div className="App">
        <Navbar />
        <Menu />
        <Login />
      </div>

    
  );
}

export default App;
