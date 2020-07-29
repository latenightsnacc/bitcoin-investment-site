import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Menu from '../src/components/Menu'
import UserDashboard from './pages/UserDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import HowToInvest from './pages/HowToInvest'
import NoInvestment from './components/NoInvestment'
function App() {
  return (
      <div className="App">
        {/* <Navbar />
        <Menu /> */}
        <UserDashboard />
      </div>

    
  );
}

export default App;
