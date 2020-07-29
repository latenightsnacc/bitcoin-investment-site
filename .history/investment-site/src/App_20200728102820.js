import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import UserDashboard from './pages/UserDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
      <div className="App">
        {/* <Navbar />
        <Menu /> */}
        <Register />
      </div>

    
  );
}

export default App;
