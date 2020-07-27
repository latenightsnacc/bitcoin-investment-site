import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Invest from './pages/Invest'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Menu>
      <Route path="/invest" component={Invest} />
      </Menu>
     
        <UserDashboard />
      </div>
    </Router>
    
  );
}

export default App;
