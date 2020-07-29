import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import UserDashboard from './pages/UserDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import HowToInvest from './pages/HowToInvest'
function App() {
  return (
      <div className="App">
        {/* <Navbar />
        <Menu /> */}
        <HowToInvest />
      </div>

    
  );
}

export default App;
