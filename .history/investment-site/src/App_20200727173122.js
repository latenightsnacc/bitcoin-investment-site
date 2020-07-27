import React from 'react';
import './App.css';
import UserDashboard from './pages/UserDashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Invest from './pages/Invest'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/invest" component={Invest} />
      </Switch>
      <div className="App">
        
        <UserDashboard />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
