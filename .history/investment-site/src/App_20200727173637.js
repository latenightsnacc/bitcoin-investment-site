import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { Router, Route, Switch } from 'react-router-dom'
import Invest from './pages/Invest'

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/invest" component={Invest} />
      </Switch>
      <div className="App">
        
        <UserDashboard />
      </div>
    </Router>
    
  );
}

export default App;
