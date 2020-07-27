import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { Router, Route, Switch } from 'react-router-dom'

import Invest from './pages/Invest'

function App() {
  return (
    <Router>
      <div className="App">
      <Route path="/invest" component={Invest} />
        <UserDashboard />
      </div>
    </Router>
    
  );
}

export default App;
